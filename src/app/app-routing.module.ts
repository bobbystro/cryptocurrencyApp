import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/Home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {CryptocurrenciesRateComponent} from './cryptocurrencies-details/cryptocurrencies-rate/cryptocurrencies-rate.component';
import {CrytpocurrenciesCurrencyCompareComponent} from './crytpocurrencies-currency-compare/crytpocurrencies-currency-compare.component';
import {CryptocurrenciesChartsComponent} from './cryptocurrencies-details/cryptocurrencies-charts/cryptocurrencies-charts.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'rate', component: CryptocurrenciesRateComponent},
  {path: 'diagrams', component: CryptocurrenciesChartsComponent},
  {path: 'crytpocurrencies-currency-compare', component: CrytpocurrenciesCurrencyCompareComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
