import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cryptocurrencies-history',
  templateUrl: './cryptocurrencies-history.component.html',
  styleUrls: ['./cryptocurrencies-history.component.scss']
})
export class CryptocurrenciesHistoryComponent implements OnInit {
  @Input() options;
  @Input() data;
  @Input() labels;

  ngOnInit() {
  }

}

