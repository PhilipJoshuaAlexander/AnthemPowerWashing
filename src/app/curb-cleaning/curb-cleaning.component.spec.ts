import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurbCleaningComponent } from './curb-cleaning.component';

describe('CurbCleaningComponent', () => {
  let component: CurbCleaningComponent;
  let fixture: ComponentFixture<CurbCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurbCleaningComponent]
    });
    fixture = TestBed.createComponent(CurbCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
