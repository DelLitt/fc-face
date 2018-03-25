import { TestBed, inject } from '@angular/core/testing';

import { CilentConfigurationServiceService } from './cilent-configuration-service.service';

describe('CilentConfigurationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CilentConfigurationServiceService]
    });
  });

  it('should be created', inject([CilentConfigurationServiceService], (service: CilentConfigurationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
