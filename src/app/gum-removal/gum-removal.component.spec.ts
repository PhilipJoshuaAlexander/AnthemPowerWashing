import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GumRemovalComponent } from './gum-removal.component';

describe('GumRemovalComponent', () => {
  let component: GumRemovalComponent;
  let fixture: ComponentFixture<GumRemovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GumRemovalComponent]
    });
    fixture = TestBed.createComponent(GumRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
