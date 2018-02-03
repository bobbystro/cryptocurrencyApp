import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/Home.component';
import {MainNavigationComponent} from './main-navigation/main-navigation.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactComponent} from './contact/contact.component';
import {AppRoutingModule} from './app-routing.module';
import {CryptocurrenciesHistoryComponent} from './cryptocurrencies-details/cryptocurrencies-charts/cryptocurrencies-history/cryptocurrencies-history.component';
import {CryptocurrenciesRateComponent} from './cryptocurrencies-details/cryptocurrencies-rate/cryptocurrencies-rate.component';
import {CryptocurrenciesDetailsService} from './cryptocurrencies-details/cryptocurrencies-details.service';
import {HttpModule} from '@angular/http';
import {CrytpocurrenciesCurrencyCompareComponent} from './crytpocurrencies-currency-compare/crytpocurrencies-currency-compare.component';
import {CrytpocurrenciesCurrencyCompareService} from './crytpocurrencies-currency-compare/crytpocurrencies-currency-compare.service';
import {ChartsModule} from 'ng2-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CryptocurrenciesPriceComponent} from './cryptocurrencies-details/cryptocurrencies-charts/cryptocurrencies-price/cryptocurrencies-price.component';
import {CryptocurrenciesChartsComponent} from './cryptocurrencies-details/cryptocurrencies-charts/cryptocurrencies-charts.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavigationComponent,
    AboutUsComponent,
    ContactComponent,
    CryptocurrenciesHistoryComponent,
    CryptocurrenciesRateComponent,
    CrytpocurrenciesCurrencyCompareComponent,
    CryptocurrenciesPriceComponent,
    CryptocurrenciesChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CryptocurrenciesDetailsService, CrytpocurrenciesCurrencyCompareService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
