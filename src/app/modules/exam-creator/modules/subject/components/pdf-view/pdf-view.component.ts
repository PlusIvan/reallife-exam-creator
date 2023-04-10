import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfViewService } from './service/pdf-view.service';
@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss'],
})
export class PdfViewComponent implements OnInit {
  constructor(
    private _DomSanitizer: DomSanitizer,
    public _pdf: PdfViewService
  ){}
  ngOnInit(): void {

  }


}
