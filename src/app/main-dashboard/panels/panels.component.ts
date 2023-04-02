import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent {
  constructor(
    public readonly backendService: BackendService
  ){};
}
