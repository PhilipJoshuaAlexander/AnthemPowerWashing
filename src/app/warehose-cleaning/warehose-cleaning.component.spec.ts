import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehoseCleaningComponent } from './warehose-cleaning.component';

describe('WarehoseCleaningComponent', () => {
  let component: WarehoseCleaningComponent;
  let fixture: ComponentFixture<WarehoseCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehoseCleaningComponent]
    });
    fixture = TestBed.createComponent(WarehoseCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
