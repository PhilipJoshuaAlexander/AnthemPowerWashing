import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuccoCleaningComponent } from './stucco-cleaning.component';

describe('StuccoCleaningComponent', () => {
  let component: StuccoCleaningComponent;
  let fixture: ComponentFixture<StuccoCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuccoCleaningComponent]
    });
    fixture = TestBed.createComponent(StuccoCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
