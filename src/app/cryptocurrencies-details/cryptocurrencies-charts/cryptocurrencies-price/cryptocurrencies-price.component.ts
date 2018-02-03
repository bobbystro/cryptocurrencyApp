import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cryptocurrencies-price',
  templateUrl: './cryptocurrencies-price.component.html',
  styleUrls: ['./cryptocurrencies-price.component.scss']
})
export class CryptocurrenciesPriceComponent implements OnInit {
  @Input() options;
  @Input() data;
  @Input() labels;

  ngOnInit() {
  }

}

