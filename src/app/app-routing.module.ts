import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'exam-creator',
    loadChildren: () => import('./modules/exam-creator/exam-creator.module').then(module => module.ExamCreatorModule)
  },
  {
    path: '**',
    redirectTo: 'exam-creator'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
