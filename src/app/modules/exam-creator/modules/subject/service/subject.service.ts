import { Injectable } from '@angular/core';
import { IDocument } from '../components/subject-template/subject.interface';
import { ISubject } from 'src/app/interfaces/subject.interface';

@Injectable()
export class SubjectService {
  questionList: Array<ISubject.RootObject> = [];
  documentData: IDocument.RootObject | undefined = undefined;
  constructor() {
/*     this.questionList = [];
    this.documentData = undefined; */
  }

}
