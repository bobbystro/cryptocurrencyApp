import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CryptocurrenciesDetailsService {

  static timeConverter(unix): string {
    const date = new Date(unix);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();

    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return date.toLocaleDateString() + ' ' + formattedTime;
  }

  constructor(private http: Http) {
  }

  getCryptocurrenciesDetails(cryptocurrencyType: string, currencyType: string) {
    return this.http.get(environment.wavesPlatform + '/' + cryptocurrencyType + '/' + currencyType + '/30/250');
  }

}
