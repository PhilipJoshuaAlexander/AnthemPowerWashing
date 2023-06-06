import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingGarageCleaningComponent } from './parking-garage-cleaning.component';

describe('ParkingGarageCleaningComponent', () => {
  let component: ParkingGarageCleaningComponent;
  let fixture: ComponentFixture<ParkingGarageCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingGarageCleaningComponent]
    });
    fixture = TestBed.createComponent(ParkingGarageCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
