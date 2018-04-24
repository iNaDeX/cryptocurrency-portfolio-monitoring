import { TestBed, inject } from '@angular/core/testing';

import { CryptoHoldingsService } from './crypto-holdings.service';

describe('CryptoHoldingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoHoldingsService]
    });
  });

  it('should be created', inject([CryptoHoldingsService], (service: CryptoHoldingsService) => {
    expect(service).toBeTruthy();
  }));
});
