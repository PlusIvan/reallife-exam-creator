import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import jsPDF from 'jspdf';
import { ISubject } from 'src/app/interfaces/subject.interface';

@Injectable({providedIn: 'root'})
export class PdfViewService {
  pdfContent: Array<ISubject.RootObject> = [];
  constructor(
    private _DomSanitizer: DomSanitizer,
  ){
    const url: any = this.pdfFile.output('datauristring');
    this.pdfFileURL = this._DomSanitizer.bypassSecurityTrustResourceUrl(url) as any;
  }
  pdfFile: jsPDF = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });
  pdfFileURL: string | undefined;
  updateContent(): void {
    let currentX = 5;
    let currentY = 5;
    this.pdfFile = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });
    this.pdfFile.setFontSize(12);
    //this.pdfFile.setFont('Courier');
    this.pdfContent.forEach((object, index) => {
      //let addedY = 0;
        if(object.question && object.image) {
          this.pdfFile.text(`(${index+1})   ${object.question}`, currentX, currentY, { maxWidth: 205, lineHeightFactor: 1, horizontalScale: 1 });
          currentY += 20;
          //addedY += 40;
          this.pdfFile.addImage({ imageData: object.image!, format: 'PNG', x: 210/Math.PI, y: currentY, width: 68, height: 68 });
        }
        currentY += 80;

    });
/*       if(object.question) {
        this.pdfFile.text(`(${index+1})   ${object.question}`, currentX, currentY, { maxWidth: 205, lineHeightFactor: 1, horizontalScale: 1 });
        //currentX += 10;
        currentY += 40;
        addedY += 40;
      }
      if(object.image) {
        this.pdfFile.addImage({ imageData: object.image!, format: 'PNG', x: 210/Math.PI, y: currentY, width: 68, height: 68 });
        //currentX += 10;
        currentY += addedY + 72;
        addedY += 72;
      } */
    
    const url: any = this.pdfFile.output('datauristring');
    this.pdfFileURL = this._DomSanitizer.bypassSecurityTrustResourceUrl(url) as any;
  }
}
