import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseWashingComponent } from './house-washing.component';

describe('HouseWashingComponent', () => {
  let component: HouseWashingComponent;
  let fixture: ComponentFixture<HouseWashingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseWashingComponent]
    });
    fixture = TestBed.createComponent(HouseWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
