import { TestBed } from '@angular/core/testing';

import { CustomFunctionDetailsService } from './custom-function-details.service';

describe('CustomFunctionDetailsService', () => {
  let service: CustomFunctionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomFunctionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
