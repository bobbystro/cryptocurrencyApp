import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CrytpocurrenciesCurrencyCompareService {

  static volumeConvert(volume): number {
    // return cryptocurrenciesMarketsService.method(volume);
    if (volume >= 1000000 && volume < 1000000000) {
      volume = Math.round((volume / 1000000) * 100) / 100 + ' mln';
      return volume;
    } else if (volume >= 1000000000 && volume < 1000000000000) {
      volume = Math.round((volume / 1000000000) * 100) / 100 + ' mld';
      return volume;
    } else if (volume >= 1000000000000) {
      volume = Math.round((volume / 1000000000000) * 100) / 100 + ' bln';
      return volume;
    } else {
      return volume;
    }
  }

  constructor(private http: Http) {
  }

  getCrytpocurrenciesCurrencyCompare(currencyType: string) {
    return this.http.get(environment.cryptoCompare + 'fsym=' + currencyType + '&limit=20');
  }

}
