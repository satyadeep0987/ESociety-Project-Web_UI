import { TestBed } from '@angular/core/testing';

import { NearbyServicesService } from './nearby-services.service';

describe('NearbyServicesService', () => {
  let service: NearbyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NearbyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
