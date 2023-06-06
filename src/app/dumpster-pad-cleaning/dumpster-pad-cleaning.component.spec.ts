import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpsterPadCleaningComponent } from './dumpster-pad-cleaning.component';

describe('DumpsterPadCleaningComponent', () => {
  let component: DumpsterPadCleaningComponent;
  let fixture: ComponentFixture<DumpsterPadCleaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DumpsterPadCleaningComponent]
    });
    fixture = TestBed.createComponent(DumpsterPadCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
