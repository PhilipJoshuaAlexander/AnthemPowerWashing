import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteCleaningComponent } from './concrete-cleaning.component';

describe('ConcreteCleaningComponent', () => {
  let component: ConcreteCleaningComponent;
  let fixture: ComponentFixture<ConcreteCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcreteCleaningComponent]
    });
    fixture = TestBed.createComponent(ConcreteCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
