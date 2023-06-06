import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpstersAndSurroundingAreasComponent } from './dumpsters-and-surrounding-areas.component';

describe('DumpstersAndSurroundingAreasComponent', () => {
  let component: DumpstersAndSurroundingAreasComponent;
  let fixture: ComponentFixture<DumpstersAndSurroundingAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DumpstersAndSurroundingAreasComponent]
    });
    fixture = TestBed.createComponent(DumpstersAndSurroundingAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
