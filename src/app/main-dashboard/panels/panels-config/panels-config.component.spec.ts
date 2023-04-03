import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsConfigComponent } from './panels-config.component';

describe('PanelsConfigComponent', () => {
  let component: PanelsConfigComponent;
  let fixture: ComponentFixture<PanelsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelsConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
