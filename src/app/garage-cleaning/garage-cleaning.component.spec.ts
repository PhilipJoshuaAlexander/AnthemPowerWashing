import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageCleaningComponent } from './garage-cleaning.component';

describe('GarageCleaningComponent', () => {
  let component: GarageCleaningComponent;
  let fixture: ComponentFixture<GarageCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarageCleaningComponent]
    });
    fixture = TestBed.createComponent(GarageCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
