import { Component, Input, OnInit } from '@angular/core';
import { ISubject } from 'src/app/interfaces/subject.interface';
import { PdfViewService } from '../pdf-view/service/pdf-view.service';

@Component({
  selector: 'question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {
  @Input() ex: ISubject.RootObject | undefined;
  
  constructor(
    private _pdf: PdfViewService
  ){}
  ngOnInit(): void {
  }
  select(): void {
    this._pdf.pdfContent.push(this.ex!);
    //this._pdf.updateContent();
  }
}
