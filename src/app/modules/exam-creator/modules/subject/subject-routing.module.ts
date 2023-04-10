import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectTemplateComponent } from './components/subject-template/subject-template.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
