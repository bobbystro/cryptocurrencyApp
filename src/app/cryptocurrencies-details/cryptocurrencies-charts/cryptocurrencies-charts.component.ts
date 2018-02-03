import {Component, OnInit} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {CryptocurrenciesDetailsModel} from '../cryptocurrencies-details.model';
import {CryptocurrenciesDetailsService} from '../cryptocurrencies-details.service';

@Component({
  selector: 'app-cryptocurrencies-charts',
  templateUrl: './cryptocurrencies-charts.component.html',
  styleUrls: ['./cryptocurrencies-charts.component.scss']
})
export class CryptocurrenciesChartsComponent implements OnInit {
  cryptocurrenciesDetailsModel: CryptocurrenciesDetailsModel;
  cryptocurrencyType = 'BTC';
  currencyType = 'USD';

  chartOptions = {
    responsive: true
  };

  chartDataPrice = [
    {data: [], label: 'Price', backgroundColor: 'rgba(0,204,0,1)', borderColor: 'rgba(0,204,0,1)', borderWidth: 1}
  ];

  chartData = [
    {data: [], label: 'Open', backgroundColor: 'rgba(0,204,0,1)', borderColor: 'rgba(0,204,0,1)', borderWidth: 1},
    {data: [], label: 'Close', backgroundColor: 'rgba(255,0,0,1)', borderColor: 'rgba(255,0,0,1)', borderWidth: 1},
  ];

  chartLabels = [];

  constructor(private cryptocurrenciesDetailsService: CryptocurrenciesDetailsService) {
    this.cryptocurrenciesDetailsModel = new CryptocurrenciesDetailsModel();
  }

  // TODO: move to service
  timeConverter(unix): string {
    const date = new Date(unix);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();

    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return date.toLocaleDateString() + ' ' + formattedTime;
  }

  getCryptocurrenciesApi() {
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
            this.timeConverter(item['timestamp']));
          if (!isNullOrUndefined(cryptocurrenciesTableItem) && Number(cryptocurrenciesTableItem.bitCoinOpen)) {
            this.chartData[0].data.unshift(Number(cryptocurrenciesTableItem.bitCoinOpen));
            this.chartData[1].data.unshift(Number(cryptocurrenciesTableItem.bitCoinClose));
            this.chartDataPrice[0].data.unshift(Number(cryptocurrenciesTableItem.bitCoinPriceVolume));
            this.chartLabels.unshift(cryptocurrenciesTableItem.bitDate);
          }
        });

      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getCryptocurrenciesApi();
  }

  getCurrencyType() {
    this.clearChartData();
    this.getCryptocurrenciesApi();
  }

  clearChartData() {
    this.chartData[0].data = [];
    this.chartData[1].data = [];
    this.chartDataPrice[0].data = [];
    this.chartLabels = [];
  }
}
