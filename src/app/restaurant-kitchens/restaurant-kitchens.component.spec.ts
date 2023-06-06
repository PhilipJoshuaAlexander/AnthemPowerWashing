import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantKitchensComponent } from './restaurant-kitchens.component';

describe('RestaurantKitchensComponent', () => {
  let component: RestaurantKitchensComponent;
  let fixture: ComponentFixture<RestaurantKitchensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantKitchensComponent]
    });
    fixture = TestBed.createComponent(RestaurantKitchensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
