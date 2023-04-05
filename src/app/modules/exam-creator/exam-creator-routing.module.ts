import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamCreatorTemplateComponent } from './components/exam-creator-template/exam-creator-template.component';

const routes: Routes = [
  {
    path: '',
    component: ExamCreatorTemplateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamCreatorRoutingModule { }
