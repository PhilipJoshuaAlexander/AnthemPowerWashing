import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveThruCleaningComponent } from './drive-thru-cleaning.component';

describe('DriveThruCleaningComponent', () => {
  let component: DriveThruCleaningComponent;
  let fixture: ComponentFixture<DriveThruCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriveThruCleaningComponent]
    });
    fixture = TestBed.createComponent(DriveThruCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
