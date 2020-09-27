import { TestBed } from '@angular/core/testing';

import { ParkingDetailsService } from './parking-details.service';

describe('ParkingDetailsService', () => {
  let service: ParkingDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
