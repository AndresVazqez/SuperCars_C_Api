import { TestBed } from '@angular/core/testing';

import { SupercarsService } from './supercars.service';

describe('SupercarsService', () => {
  let service: SupercarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupercarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
