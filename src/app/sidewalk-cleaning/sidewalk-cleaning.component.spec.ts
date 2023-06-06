import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidewalkCleaningComponent } from './sidewalk-cleaning.component';

describe('SidewalkCleaningComponent', () => {
  let component: SidewalkCleaningComponent;
  let fixture: ComponentFixture<SidewalkCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidewalkCleaningComponent]
    });
    fixture = TestBed.createComponent(SidewalkCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
