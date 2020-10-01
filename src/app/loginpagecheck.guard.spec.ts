import { TestBed } from '@angular/core/testing';

import { LoginpagecheckGuard } from './loginpagecheck.guard';

describe('LoginpagecheckGuard', () => {
  let guard: LoginpagecheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginpagecheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
