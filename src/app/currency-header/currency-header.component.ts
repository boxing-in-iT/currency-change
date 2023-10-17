import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyService } from '../services/currnecyService';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-currency-header',
  templateUrl: './currency-header.component.html',
  styleUrls: ['./currency-header.component.css'],
})
export class CurrencyHeaderComponent implements OnInit {
  exchangeRates: any = {};
  apiKey = '468f045a53msh0c1d0810262e0d5p1eba0fjsn7063a3d95434';
  apiHost = 'currency-exchange.p.rapidapi.com';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    const fromUsd = 'USD';
    const fromEur = 'EUR';

    forkJoin([
      this.currencyService.getExchangeRates(
        this.apiKey,
        fromUsd,
        'UAH',
        this.apiHost
      ),
      this.currencyService.getExchangeRates(
        this.apiKey,
        fromEur,
        'UAH',
        this.apiHost
      ),
    ]).subscribe(([usdData, eurData]) => {
      this.exchangeRates[fromUsd] = usdData.toFixed(2);
      this.exchangeRates[fromEur] = eurData.toFixed(2);
      console.log(this.exchangeRates);
    });
  }
}
