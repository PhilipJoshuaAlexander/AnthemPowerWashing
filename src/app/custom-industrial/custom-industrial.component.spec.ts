import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIndustrialComponent } from './custom-industrial.component';

describe('CustomIndustrialComponent', () => {
  let component: CustomIndustrialComponent;
  let fixture: ComponentFixture<CustomIndustrialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomIndustrialComponent]
    });
    fixture = TestBed.createComponent(CustomIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
