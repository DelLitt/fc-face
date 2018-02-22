import { TestBed, inject } from '@angular/core/testing';

import { StringCacheUtilityService } from './string-cache-utility.service';

describe('StringCacheUtilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StringCacheUtilityService]
    });
  });

  it('should be created', inject([StringCacheUtilityService], (service: StringCacheUtilityService) => {
    expect(service).toBeTruthy();
  }));
});
