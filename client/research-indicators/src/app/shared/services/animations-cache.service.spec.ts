import { TestBed } from '@angular/core/testing';

import { AnimationsCacheService } from './animations-cache.service';

describe('AnimationsCacheService', () => {
  let service: AnimationsCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationsCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
