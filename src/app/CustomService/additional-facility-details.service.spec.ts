import { TestBed } from '@angular/core/testing';

import { AdditionalFacilityDetailsService } from './additional-facility-details.service';

describe('AdditionalFacilityDetailsService', () => {
  let service: AdditionalFacilityDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalFacilityDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
