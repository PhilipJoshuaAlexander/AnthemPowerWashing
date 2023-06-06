import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationCleaningComponent } from './gas-station-cleaning.component';

describe('GasStationCleaningComponent', () => {
  let component: GasStationCleaningComponent;
  let fixture: ComponentFixture<GasStationCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasStationCleaningComponent]
    });
    fixture = TestBed.createComponent(GasStationCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
