import { TestBed, inject } from '@angular/core/testing';

import { SiteMapService } from './site-map.service';

describe('SiteMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteMapService]
    });
  });

  it('should be created', inject([SiteMapService], (service: SiteMapService) => {
    expect(service).toBeTruthy();
  }));
});
