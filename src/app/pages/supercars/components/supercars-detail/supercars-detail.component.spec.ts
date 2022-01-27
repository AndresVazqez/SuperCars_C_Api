import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupercarsDetailComponent } from './supercars-detail.component';

describe('SupercarsDetailComponent', () => {
  let component: SupercarsDetailComponent;
  let fixture: ComponentFixture<SupercarsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupercarsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupercarsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
