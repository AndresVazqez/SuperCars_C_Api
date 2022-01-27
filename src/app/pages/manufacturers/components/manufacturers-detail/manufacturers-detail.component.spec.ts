import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersDetailComponent } from './manufacturers-detail.component';

describe('ManufacturersDetailComponent', () => {
  let component: ManufacturersDetailComponent;
  let fixture: ComponentFixture<ManufacturersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
