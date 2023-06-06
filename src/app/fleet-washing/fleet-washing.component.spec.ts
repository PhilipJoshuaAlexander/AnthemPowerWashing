import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetWashingComponent } from './fleet-washing.component';

describe('FleetWashingComponent', () => {
  let component: FleetWashingComponent;
  let fixture: ComponentFixture<FleetWashingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleetWashingComponent]
    });
    fixture = TestBed.createComponent(FleetWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
