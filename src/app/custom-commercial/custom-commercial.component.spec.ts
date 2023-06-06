import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCommercialComponent } from './custom-commercial.component';

describe('CustomCommercialComponent', () => {
  let component: CustomCommercialComponent;
  let fixture: ComponentFixture<CustomCommercialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomCommercialComponent]
    });
    fixture = TestBed.createComponent(CustomCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
