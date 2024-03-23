import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamCreatorRoutingModule } from './exam-creator-routing.module';
import { ExamCreatorTemplateComponent } from './components/exam-creator-template/exam-creator-template.component';
import { OptionItemComponent } from './components/option-item/option-item.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RootViewComponent } from './components/root-view/root-view.component';


@NgModule({
  declarations: [
    ExamCreatorTemplateComponent,
    OptionItemComponent,
    SideMenuComponent,
    RootViewComponent,
  ],
  imports: [
    CommonModule,
    ExamCreatorRoutingModule,
    NgMaterialModule,
  ]
})
export class ExamCreatorModule { }
