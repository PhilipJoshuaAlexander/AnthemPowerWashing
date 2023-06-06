import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPatioCleaningComponent } from './restaurant-patio-cleaning.component';

describe('RestaurantPatioCleaningComponent', () => {
  let component: RestaurantPatioCleaningComponent;
  let fixture: ComponentFixture<RestaurantPatioCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantPatioCleaningComponent]
    });
    fixture = TestBed.createComponent(RestaurantPatioCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
