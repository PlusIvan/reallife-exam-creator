import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SubjectService } from '../../service/subject.service';
import { IDocument } from './subject.interface';
import { ISubject } from 'src/app/interfaces/subject.interface';
import { PdfViewService } from '../pdf-view/service/pdf-view.service';

@Component({
  selector: 'app-subject-template',
  templateUrl: './subject-template.component.html',
  styleUrls: ['./subject-template.component.scss'],
})
export class SubjectTemplateComponent implements OnInit {
  documentId: string | undefined;
  selectedMenu = false;
  constructor(
    private _route: ActivatedRoute, 
    private _fireStore: AngularFirestore, 
    private _subject: SubjectService, 
    private _router: Router,
    private _pdf: PdfViewService,
    ){
      this._route.params.subscribe({ next: (params: Params | { documentId: string; }) => { this.documentId = params.documentId; this.loadContent(); }});
    }
  ngOnInit(): void {
  }

  private loadContent(): void {
    this._fireStore.collection('/subjects').doc(this.documentId).get().subscribe({
      next: (documentsnapshot) => {
        console.log('documentsnapshot',documentsnapshot);
        this._subject.documentData = documentsnapshot.data() as IDocument.RootObject;
      }
    });

    this._fireStore.collection('/subjects').doc(this.documentId).collection('/questions').get().subscribe({
      next: (querysnapshot) => {
        console.log('querysnapshot',querysnapshot);
        this._subject.questionList = querysnapshot.docs.reduce((previousValue: any, currentValue, currentIndex: number) => {
          previousValue[currentIndex] = currentValue.data() as ISubject.RootObject;
          return previousValue;
        }, []);
      }
    });
  }

  get list(): Array<ISubject.RootObject> {
    return this._subject.questionList;
  }

  get documentName(): string | undefined {
    return this._subject.documentData?.name;
  }

  get selectedLength(): number {
    return this._pdf.pdfContent.length
  }

  get selectedList(): Array<ISubject.RootObject> { 
    return this._pdf.pdfContent;
  }
}
