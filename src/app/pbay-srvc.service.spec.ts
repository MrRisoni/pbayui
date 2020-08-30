import { TestBed } from '@angular/core/testing';

import { PBayService } from './pbay-srvc.service';

describe('PBayService', () => {
  let service: PBayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PBayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
