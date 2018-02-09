import { TestBed, inject } from '@angular/core/testing';

import { PublicationsRepositoryService } from './publications-repository.service';

describe('PublicationsRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicationsRepositoryService]
    });
  });

  it('should be created', inject([PublicationsRepositoryService], (service: PublicationsRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
