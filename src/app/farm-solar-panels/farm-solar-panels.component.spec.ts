import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmSolarPanelsComponent } from './farm-solar-panels.component';

describe('FarmSolarPanelsComponent', () => {
  let component: FarmSolarPanelsComponent;
  let fixture: ComponentFixture<FarmSolarPanelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmSolarPanelsComponent]
    });
    fixture = TestBed.createComponent(FarmSolarPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
