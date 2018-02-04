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

  constructor(private cryptocurrenciesMarketsService: CrytpocurrenciesCurrencyCompareService) {
  }

  getCurrencyList() {
    this.cryptocurrenciesCompare = [];
    this.cryptocurrenciesMarketsService.getCrytpocurrenciesCurrencyCompare(this.currencyType).subscribe(
      result => {
        const jsonData = result.json();
        jsonData.Data.forEach(item => {
          const cryptocurrenciesCompareItem = new CrytpocurrenciesCurrencyCompareModel(
            item['fromSymbol'],
            item['toSymbol'],
            Math.round(item['volume24h'] * 100) / 100,
            CrytpocurrenciesCurrencyCompareService.volumeConvert(Math.round(item['volume24hTo'] * 100) / 100)
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
