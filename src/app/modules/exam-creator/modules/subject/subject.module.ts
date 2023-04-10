import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectTemplateComponent } from './components/subject-template/subject-template.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { NgMaterialModule } from 'src/app/modules/ng-material/ng-material.module';
import { PdfViewComponent } from './components/pdf-view/pdf-view.component';


@NgModule({
  declarations: [
    SubjectTemplateComponent,
    QuestionCardComponent,
    PdfViewComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    NgMaterialModule,
  ]
})
export class SubjectModule { }
