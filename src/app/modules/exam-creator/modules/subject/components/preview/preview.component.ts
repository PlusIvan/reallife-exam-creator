import { AfterViewInit, Component, ContentChildren, ElementRef, Input, QueryList, ViewChild } from '@angular/core';
import { PdfViewService } from '../pdf-view/service/pdf-view.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements AfterViewInit {
  @Input() pageSize: "A3" | "A4" = "A4";

  @ViewChild("paginatedView") paginatedView!: ElementRef<HTMLDivElement>;

  @ViewChild("contentWrapper") contentWrapper!: ElementRef<HTMLDivElement>;

  @ContentChildren("pageContent", { read: ElementRef }) elements!: QueryList<
    ElementRef
  >;

  constructor(
    private _pdf: PdfViewService,
  ) {}

  ngAfterViewInit(): void {
    this.updatePages();

    // when ever childs updated call the updatePagesfunction
    this.elements.changes.subscribe(el => {
      console.log(el);
      this.updatePages();
    });
  }

  updatePages(): void {
    // clear paginated view
    this.paginatedView.nativeElement.innerHTML = "";

    // get a new page and add it to the paginated view
    let page = this.getNewPage();
    this.paginatedView.nativeElement.appendChild(page);

    let lastEl: HTMLElement;
    // add content childrens to the page one by one
    this.elements.forEach(elRef => {
      const el = elRef.nativeElement;

      // if the content child height is larger than the size of the page
      // then do not add it to the page
      if (el.clientHeight > page.clientHeight) {
        return;
      }
      // add the child to the page
      page.appendChild(el);

      // after adding the child if the page scroll hight becomes larger than the page height
      // then get a new page and append the child to the  new page
      if (page.scrollHeight > page.clientHeight) {
        page = this.getNewPage();
        this.paginatedView.nativeElement.appendChild(page);
        page.appendChild(el);
      }
      lastEl = el;
      //lastEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    
      
    
    
  }

  getNewPage(): HTMLDivElement {
    const page = document.createElement("div");
    page.classList.add("page");
    page.classList.add(this.pageSize);
    return page;
  }

  export() {
    console.log(this.paginatedView.nativeElement);
    this._pdf.pdfFile.html(this.paginatedView.nativeElement.innerHTML);
    this._pdf.updateContent();

  }
}
