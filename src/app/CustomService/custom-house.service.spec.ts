import { TestBed } from '@angular/core/testing';

import { CustomHouseService } from './custom-house.service';

describe('CustomHouseService', () => {
  let service: CustomHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
