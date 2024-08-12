import { TestBed } from '@angular/core/testing';

import { DynamicToastService } from './dynamic-toast.service';

describe('DynamicToastService', () => {
  let service: DynamicToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
