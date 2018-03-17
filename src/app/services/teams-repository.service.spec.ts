import { TestBed, inject } from '@angular/core/testing';

import { TeamsRepositoryService } from './teams-repository.service';

describe('TeamsRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsRepositoryService]
    });
  });

  it('should be created', inject([TeamsRepositoryService], (service: TeamsRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
