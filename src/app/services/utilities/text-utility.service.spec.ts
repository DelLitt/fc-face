import { TestBed, inject } from '@angular/core/testing';

import { TextUtilityService } from './text-utility.service';

describe('TextUtilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextUtilityService]
    });
  });

  it('should be created', inject([TextUtilityService], (service: TextUtilityService) => {
    expect(service).toBeTruthy();
  }));
});
