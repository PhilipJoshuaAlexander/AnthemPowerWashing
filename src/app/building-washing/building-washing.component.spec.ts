import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingWashingComponent } from './building-washing.component';

describe('BuildingWashingComponent', () => {
  let component: BuildingWashingComponent;
  let fixture: ComponentFixture<BuildingWashingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingWashingComponent]
    });
    fixture = TestBed.createComponent(BuildingWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
