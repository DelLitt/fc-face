import { TestBed, inject } from '@angular/core/testing';

import { VideosRepositoryService } from './videos-repository.service';

describe('VideoRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideosRepositoryService]
    });
  });

  it('should be created', inject([VideosRepositoryService], (service: VideosRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
