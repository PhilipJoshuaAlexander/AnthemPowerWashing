import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraffitiRemovalComponent } from './graffiti-removal.component';

describe('GraffitiRemovalComponent', () => {
  let component: GraffitiRemovalComponent;
  let fixture: ComponentFixture<GraffitiRemovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraffitiRemovalComponent]
    });
    fixture = TestBed.createComponent(GraffitiRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
