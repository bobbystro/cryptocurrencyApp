import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CryptocurrenciesDetailsService {

  constructor(private http: Http) {
  }

  getCryptocurrenciesDetails(cryptocurrencyType: string, currencyType: string) {
    return this.http.get(environment.wavesPlatform + '/' + cryptocurrencyType + '/' + currencyType + '/30/250');
  }

}
