import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';

import 'rxjs/add/operator/catch';

@Injectable()
export class CryptoRateService {

  static readonly httpOptions = {
    headers: new HttpHeaders({
      'X-CoinAPI-Key': 'INSERT_HERE_YOUR_COINAPI_FREE_KEY' // authentication header
    })
  };

  constructor(private http: HttpClient) { }

  getRate(currencySymbol: string): Observable<any> {
    let url: string = `https://rest.coinapi.io/v1/exchangerate/${currencySymbol}/USD`; // get Coin / USD exchange rate
    return this.http.get(url, CryptoRateService.httpOptions)
      .catch((err:any) => new EmptyObservable()) // catch any error;
  }
}
