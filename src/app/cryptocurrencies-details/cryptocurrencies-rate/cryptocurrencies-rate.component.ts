import {Component, OnInit} from '@angular/core';
import {CryptocurrenciesDetailsModel} from '../cryptocurrencies-details.model';
import {CryptocurrenciesDetailsService} from '../cryptocurrencies-details.service';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-cryptocurrencies-rate',
  templateUrl: './cryptocurrencies-rate.component.html',
  styleUrls: ['./cryptocurrencies-rate.component.scss']
})
export class CryptocurrenciesRateComponent implements OnInit {
  cryptocurrenciesTableModel: CryptocurrenciesDetailsModel[];
  cryptocurrencyType = 'BTC';
  currencyType = 'USD';
  rateTableView = 'Current rate view';
  showRateView = true;
  showTableView = false;

  constructor(private cryptocurrenciesDetailsService: CryptocurrenciesDetailsService) {
  }

  getCryptocurrenciesRateApi() {
    this.cryptocurrenciesTableModel = [];
    this.cryptocurrenciesDetailsService.getCryptocurrenciesDetails(this.cryptocurrencyType, this.currencyType).subscribe(
      data => {
        const jsonData = data.json();
        jsonData.forEach(item => {
          const cryptocurrenciesTableItem = new CryptocurrenciesDetailsModel(
            item['open'],
            item['close'],
            item['high'],
            item['low'],
            item['priceVolume'],
            item['volume'],
            CryptocurrenciesDetailsService.timeConverter(item['timestamp']));
          if (!isNullOrUndefined(cryptocurrenciesTableItem) && Number(cryptocurrenciesTableItem.bitCoinOpen)) {
            this.cryptocurrenciesTableModel.push(cryptocurrenciesTableItem);
          }
        });
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getCryptocurrenciesRateApi();
  }

  getCurrencyType() {
    this.getCryptocurrenciesRateApi();
  }

  changeView() {
    if (this.rateTableView === 'Current rate view') {
      this.showRateView = true;
      this.showTableView = false;
    } else {
      this.showRateView = false;
      this.showTableView = true;
    }
  }

}
