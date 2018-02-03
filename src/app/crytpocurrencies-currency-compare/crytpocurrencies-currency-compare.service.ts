import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CrytpocurrenciesCurrencyCompareService {

  constructor(private http: Http) {
  }

  getCrytpocurrenciesCurrencyCompare(currencyType: string) {
    return this.http.get(environment.cryptoCompare + 'fsym=' + currencyType + '&limit=20');
  }

}
