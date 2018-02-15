import { TestBed, inject } from '@angular/core/testing';

import { VideoRepositoryService } from './video-repository.service';

describe('VideoRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoRepositoryService]
    });
  });

  it('should be created', inject([VideoRepositoryService], (service: VideoRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
