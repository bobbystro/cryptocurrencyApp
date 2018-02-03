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
  cryptocurrenciesDetailsModel: CryptocurrenciesDetailsModel;
  cryptocurrenciesTableModel: CryptocurrenciesDetailsModel[];
  cryptocurrencyType = 'BTC';
  currencyType = 'USD';
  rateTableView = 'Current rate view';
  showRateView = true;
  showTableView = false;

  constructor(private cryptocurrenciesDetailsService: CryptocurrenciesDetailsService) {
    this.cryptocurrenciesDetailsModel = new CryptocurrenciesDetailsModel();
  }

  timeConverter(unix): string {
    const date = new Date(unix);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();

    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return date.toLocaleDateString() + ' ' + formattedTime;
  }

  ngOnInit() {
    this.cryptocurrenciesTableModel = [];
    this.cryptocurrenciesDetailsService.getCryptocurrenciesDetails(this.cryptocurrencyType, this.currencyType).subscribe(
      data => {
        const jsonData = data.json();
        this.cryptocurrenciesDetailsModel = new CryptocurrenciesDetailsModel(
          jsonData[0]['open'],
          jsonData[0]['close'],
          jsonData[0]['high'],
          jsonData[0]['low'],
          jsonData[0]['priceVolume'],
          jsonData[0]['volume'],
        );
        jsonData.forEach(item => {
          const cryptocurrenciesTableItem = new CryptocurrenciesDetailsModel(
            item['open'],
            item['close'],
            item['high'],
            item['low'],
            item['priceVolume'],
            item['volume'],
            this.timeConverter(item['timestamp']));
          if (!isNullOrUndefined(cryptocurrenciesTableItem) && Number(cryptocurrenciesTableItem.bitCoinOpen)) {
            this.cryptocurrenciesTableModel.push(cryptocurrenciesTableItem);
          }
        });


      }, error => {
        console.log(error);
      }
    );

  }

  getCurrencyType() {
    this.cryptocurrenciesTableModel = [];
    this.cryptocurrenciesDetailsService.getCryptocurrenciesDetails(this.cryptocurrencyType, this.currencyType).subscribe(
      data => {
        const jsonData = data.json();
        this.cryptocurrenciesDetailsModel = new CryptocurrenciesDetailsModel(
          jsonData[0]['open'],
          jsonData[0]['close'],
          jsonData[0]['high'],
          jsonData[0]['low'],
          jsonData[0]['priceVolume'],
          jsonData[0]['volume'],
        );
        jsonData.forEach(item => {
          const cryptocurrenciesTableItem = new CryptocurrenciesDetailsModel(
            item['open'],
            item['close'],
            item['high'],
            item['low'],
            item['priceVolume'],
            item['volume'],
            this.timeConverter(item['timestamp']));
          if (!isNullOrUndefined(cryptocurrenciesTableItem) && Number(cryptocurrenciesTableItem.bitCoinOpen)) {
            this.cryptocurrenciesTableModel.push(cryptocurrenciesTableItem);
          }
        });


      }, error => {
        console.log(error);
      }
    );
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
