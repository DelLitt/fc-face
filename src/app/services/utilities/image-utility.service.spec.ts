import { TestBed, inject } from '@angular/core/testing';

import { ImageUtilityService } from './image-utility.service';

describe('ImageUtilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageUtilityService]
    });
  });

  it('should be created', inject([ImageUtilityService], (service: ImageUtilityService) => {
    expect(service).toBeTruthy();
  }));
});
