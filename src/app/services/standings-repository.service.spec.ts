import { TestBed, inject } from '@angular/core/testing';

import { StandingsRepositoryService } from './standings-repository.service';

describe('StandingsRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandingsRepositoryService]
    });
  });

  it('should be created', inject([StandingsRepositoryService], (service: StandingsRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
