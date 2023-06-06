import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorWindowWashingComponent } from './exterior-window-washing.component';

describe('ExteriorWindowWashingComponent', () => {
  let component: ExteriorWindowWashingComponent;
  let fixture: ComponentFixture<ExteriorWindowWashingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExteriorWindowWashingComponent]
    });
    fixture = TestBed.createComponent(ExteriorWindowWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
