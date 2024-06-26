import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamCreatorTemplateComponent } from './components/exam-creator-template/exam-creator-template.component';
import { RootViewComponent } from './components/root-view/root-view.component';

const routes: Routes = [
  {
    path: '',
    component: ExamCreatorTemplateComponent,
    children: [
      {
        path: '',
        component: RootViewComponent,
      },
      {
        path: 'list/:documentId',
        loadChildren: () => import('./modules/subject/subject.module').then(module => module.SubjectModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamCreatorRoutingModule { }
