import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivewayCleaningComponent } from './driveway-cleaning.component';

describe('DrivewayCleaningComponent', () => {
  let component: DrivewayCleaningComponent;
  let fixture: ComponentFixture<DrivewayCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrivewayCleaningComponent]
    });
    fixture = TestBed.createComponent(DrivewayCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
