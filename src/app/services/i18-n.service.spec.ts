import { TestBed, inject } from '@angular/core/testing';

import { I18NService } from './i18-n.service';

describe('I18NService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [I18NService]
    });
  });

  it('should be created', inject([I18NService], (service: I18NService) => {
    expect(service).toBeTruthy();
  }));
});
