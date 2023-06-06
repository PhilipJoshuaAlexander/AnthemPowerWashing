import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundEquipmentComponent } from './playground-equipment.component';

describe('PlaygroundEquipmentComponent', () => {
  let component: PlaygroundEquipmentComponent;
  let fixture: ComponentFixture<PlaygroundEquipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaygroundEquipmentComponent]
    });
    fixture = TestBed.createComponent(PlaygroundEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
