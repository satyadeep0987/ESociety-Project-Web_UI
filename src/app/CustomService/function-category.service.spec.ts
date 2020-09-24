import { TestBed } from '@angular/core/testing';

import { FunctionCategoryService } from './function-category.service';

describe('FunctionCategoryService', () => {
  let service: FunctionCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
