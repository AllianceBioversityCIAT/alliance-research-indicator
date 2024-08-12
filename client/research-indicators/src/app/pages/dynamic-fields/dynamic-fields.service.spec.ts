import { TestBed } from '@angular/core/testing';

import { DynamicFieldsService } from './dynamic-fields.service';

describe('DynamicFieldsService', () => {
  let service: DynamicFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
