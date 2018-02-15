import { TestBed, inject } from '@angular/core/testing';

import { GalleriesRepositoryService } from './galleries-repository.service';

describe('GalleriesRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalleriesRepositoryService]
    });
  });

  it('should be created', inject([GalleriesRepositoryService], (service: GalleriesRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
