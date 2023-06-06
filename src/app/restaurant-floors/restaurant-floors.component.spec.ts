import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFloorsComponent } from './restaurant-floors.component';

describe('RestaurantFloorsComponent', () => {
  let component: RestaurantFloorsComponent;
  let fixture: ComponentFixture<RestaurantFloorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantFloorsComponent]
    });
    fixture = TestBed.createComponent(RestaurantFloorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
