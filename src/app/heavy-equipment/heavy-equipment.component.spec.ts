import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyEquipmentComponent } from './heavy-equipment.component';

describe('HeavyEquipmentComponent', () => {
  let component: HeavyEquipmentComponent;
  let fixture: ComponentFixture<HeavyEquipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeavyEquipmentComponent]
    });
    fixture = TestBed.createComponent(HeavyEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
