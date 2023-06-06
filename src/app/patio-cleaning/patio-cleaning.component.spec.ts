import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatioCleaningComponent } from './patio-cleaning.component';

describe('PatioCleaningComponent', () => {
  let component: PatioCleaningComponent;
  let fixture: ComponentFixture<PatioCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatioCleaningComponent]
    });
    fixture = TestBed.createComponent(PatioCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
