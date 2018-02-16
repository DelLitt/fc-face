import { TestBed, inject } from '@angular/core/testing';

import { UrlUtilityService } from './url-utility.service';

describe('UrlUtilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlUtilityService]
    });
  });

  it('should be created', inject([UrlUtilityService], (service: UrlUtilityService) => {
    expect(service).toBeTruthy();
  }));
});
