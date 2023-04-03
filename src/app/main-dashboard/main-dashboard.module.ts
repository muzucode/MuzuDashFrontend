import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelsComponent } from './panels/panels.component';
import { BackendService } from '../backend.service';
import { PanelsConfigComponent } from './panels/panels-config/panels-config.component';

@NgModule({
  declarations: [
    PanelsComponent,
    PanelsConfigComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelsComponent,
  ]
})
export class MainDashboardModule {
  constructor(){};
}
