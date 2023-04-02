import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelsComponent } from './panels/panels.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BackendService } from '../backend.service';

@NgModule({
  declarations: [
    PanelsComponent,
    MainNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelsComponent,
    MainNavComponent,
  ]
})
export class MainDashboardModule {
  constructor(){};
}
