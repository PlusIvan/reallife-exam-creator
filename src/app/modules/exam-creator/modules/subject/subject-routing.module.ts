import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectTemplateComponent } from './components/subject-template/subject-template.component';
import { ViewQuestionsComponent } from './components/view-questions/view-questions.component';
import { PreviewComponent } from './components/preview/preview.component';
import { PreviewRenderComponent } from './components/preview-render/preview-render.component';
import { PdfViewComponent } from './components/pdf-view/pdf-view.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectTemplateComponent,
    children: [
      {
        path: 'questions',
        component: ViewQuestionsComponent
      },
      {
        path: 'preview',
        component: PreviewRenderComponent,
      },
      {
        path: 'export',
        component: PdfViewComponent,
      },
      {
        path: '**',
        redirectTo: 'questions'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
