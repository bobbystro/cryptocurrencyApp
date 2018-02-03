import {Component, OnInit} from '@angular/core';
import {CrytpocurrenciesCurrencyCompareModel} from './crytpocurrencies-currency-compare.model';
import {CrytpocurrenciesCurrencyCompareService} from './crytpocurrencies-currency-compare.service';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-crytpocurrencies-currency-compare',
  templateUrl: './crytpocurrencies-currency-compare.component.html',
  styleUrls: ['./crytpocurrencies-currency-compare.component.scss']
})
export class CrytpocurrenciesCurrencyCompareComponent implements OnInit {
  cryptocurrenciesCompare: CrytpocurrenciesCurrencyCompareModel[];
  currencyType = 'BTC';

  // TODO: bad spelling
  constructor(private cryptocurrenciesMarektsService: CrytpocurrenciesCurrencyCompareService) {
  }

  // TODO: bad spelling + move to service
  volumeConvert(volume): number {
    // return cryptocurrenciesMarektsService.method(volume);
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

  getCurrencyList() {
    this.cryptocurrenciesCompare = [];
    this.cryptocurrenciesMarektsService.getCrytpocurrenciesCurrencyCompare(this.currencyType).subscribe(
      result => {
        const jsonData = result.json();
        jsonData.Data.forEach(item => {
          const cryptocurrenciesCompareItem = new CrytpocurrenciesCurrencyCompareModel(
            item['fromSymbol'],
            item['toSymbol'],
            Math.round(item['volume24h'] * 100) / 100,
            this.volumeConvert(Math.round(item['volume24hTo'] * 100) / 100)
          );
          if (!isNullOrUndefined(cryptocurrenciesCompareItem)) {
            this.cryptocurrenciesCompare.push(cryptocurrenciesCompareItem);
          }
        });
      }
    );
  }

  ngOnInit() {
    this.getCurrencyList();
  }

  getCryptocurrenciesType() {
    this.getCurrencyList();
  }

}
