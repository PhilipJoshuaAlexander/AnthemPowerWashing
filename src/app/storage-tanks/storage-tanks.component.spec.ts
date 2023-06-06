import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageTanksComponent } from './storage-tanks.component';

describe('StorageTanksComponent', () => {
  let component: StorageTanksComponent;
  let fixture: ComponentFixture<StorageTanksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorageTanksComponent]
    });
    fixture = TestBed.createComponent(StorageTanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
