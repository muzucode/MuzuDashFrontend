import { Injectable } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Injectable({
  providedIn: 'root'
})
export class PanelsLoaderService {
  constructor(
    public readonly backendService: BackendService
  ) { }

  panels: Panel[] = []

  fetchPanels() {
    this.panels = ['']
  }

}
