import { TestBed, inject } from '@angular/core/testing';

import { CryptoRateService } from './crypto-rate.service';

describe('CryptoRateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoRateService]
    });
  });

  it('should be created', inject([CryptoRateService], (service: CryptoRateService) => {
    expect(service).toBeTruthy();
  }));
});
