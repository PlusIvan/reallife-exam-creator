import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const ngModules = [
  MatSidenavModule,
  MatButtonModule,
  MatBadgeModule,
  MatExpansionModule,
  MatListModule,
  MatProgressBarModule,
  MatChipsModule,
  MatIconModule,
  MatToolbarModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...ngModules,
  ],
  exports: [
    ...ngModules,
  ]
})
export class NgMaterialModule { }
