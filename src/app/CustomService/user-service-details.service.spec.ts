import { TestBed } from '@angular/core/testing';

import { UserServiceDetailsService } from './user-service-details.service';

describe('UserServiceDetailsService', () => {
  let service: UserServiceDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
