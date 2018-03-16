import { TestBed, inject } from '@angular/core/testing';

import { PersonsRepositoryService } from './persons-repository.service';

describe('PersonsRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonsRepositoryService]
    });
  });

  it('should be created', inject([PersonsRepositoryService], (service: PersonsRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
