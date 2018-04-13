import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Currency } from './../models';

@Injectable()
export class CurrencyService {

  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<Currency[]> {
    return this.http
      .get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .map((data: any) => data.map(c => new Currency(c)));
  }
}
