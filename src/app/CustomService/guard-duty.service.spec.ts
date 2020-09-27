import { TestBed } from '@angular/core/testing';

import { GuardDutyService } from './guard-duty.service';

describe('GuardDutyService', () => {
  let service: GuardDutyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardDutyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
