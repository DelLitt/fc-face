import { TestBed, inject } from '@angular/core/testing';

import { TourneysRepositoryService } from './tourneys-repository.service';

describe('TourneysRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourneysRepositoryService]
    });
  });

  it('should be created', inject([TourneysRepositoryService], (service: TourneysRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
