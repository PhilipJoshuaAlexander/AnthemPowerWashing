import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolDeckCleaningComponent } from './pool-deck-cleaning.component';

describe('PoolDeckCleaningComponent', () => {
  let component: PoolDeckCleaningComponent;
  let fixture: ComponentFixture<PoolDeckCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoolDeckCleaningComponent]
    });
    fixture = TestBed.createComponent(PoolDeckCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
