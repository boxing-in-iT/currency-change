import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currnecyService';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-currency-header',
  templateUrl: './currency-header.component.html',
  styleUrls: ['./currency-header.component.css'],
})
export class CurrencyHeaderComponent implements OnInit {
  exchangeRates: any = {};

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    const fromUsd = 'USD';
    const fromEur = 'EUR';

    forkJoin([
      this.currencyService.getExchangeRates(fromUsd, 'UAH', 1),
      this.currencyService.getExchangeRates(fromEur, 'UAH', 1),
    ]).subscribe(
      ([usdData, eurData]) => {
        this.exchangeRates[fromUsd] = usdData.result.toFixed(2);
        this.exchangeRates[fromEur] = eurData.result.toFixed(2);
        console.log(this.exchangeRates);
      },
      (error) => {
        console.error('Error fetching exchange rates:', error);
      }
    );
  }
}
