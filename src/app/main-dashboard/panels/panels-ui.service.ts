import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Injectable({
  providedIn: 'root'
})
export class PanelsUIService {
  constructor(
    public readonly backendService: BackendService
  ) { }

  addPanel() {

  }

  removePanel() {

  }

  

}
