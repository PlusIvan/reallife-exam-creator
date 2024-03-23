import { Component } from '@angular/core';
import { PdfViewService } from '../pdf-view/service/pdf-view.service';

@Component({
  selector: 'app-preview-render',
  templateUrl: './preview-render.component.html',
  styleUrls: ['./preview-render.component.scss']
})
export class PreviewRenderComponent {
  constructor(
    private _pdf: PdfViewService,
  ){}
  get list() {
    return this._pdf.pdfContent;
  }
}
