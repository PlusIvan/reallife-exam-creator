import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.scss'],
})
export class ViewQuestionsComponent implements OnInit {
  constructor(
    private _subject: SubjectService,
  ){}

  ngOnInit(): void {
    
  }

  get list() {
    return this._subject.questionList;
  }
}
