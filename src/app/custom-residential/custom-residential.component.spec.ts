import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomResidentialComponent } from './custom-residential.component';

describe('CustomResidentialComponent', () => {
  let component: CustomResidentialComponent;
  let fixture: ComponentFixture<CustomResidentialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomResidentialComponent]
    });
    fixture = TestBed.createComponent(CustomResidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
