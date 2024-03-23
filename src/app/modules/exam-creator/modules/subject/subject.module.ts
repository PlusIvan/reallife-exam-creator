import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectTemplateComponent } from './components/subject-template/subject-template.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { NgMaterialModule } from 'src/app/modules/ng-material/ng-material.module';
import { PdfViewComponent } from './components/pdf-view/pdf-view.component';
import { ViewQuestionsComponent } from './components/view-questions/view-questions.component';
import { PreviewComponent } from './components/preview/preview.component';
import { PreviewRenderComponent } from './components/preview-render/preview-render.component';


@NgModule({
  declarations: [
    SubjectTemplateComponent,
    QuestionCardComponent,
    PdfViewComponent,
    ViewQuestionsComponent,
    PreviewComponent,
    PreviewRenderComponent,
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    NgMaterialModule,
  ]
})
export class SubjectModule { }
