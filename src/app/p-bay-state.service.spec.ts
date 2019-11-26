import { TestBed } from '@angular/core/testing';

import { PBayStateService } from './p-bay-state.service';

describe('PBayStateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PBayStateService = TestBed.get(PBayStateService);
    expect(service).toBeTruthy();
  });
});
