import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currnecyService';
import { forkJoin } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-main',
  templateUrl: './currency-main.component.html',
  styleUrls: ['./currency-main.component.css'],
})
export class CurrencyMainComponent implements OnInit {
  exchangeRates: any = {};

  apiKey = '468f045a53msh0c1d0810262e0d5p1eba0fjsn7063a3d95434';
  apiHost = 'currency-exchange.p.rapidapi.com';

  amount1!: number;
  currencyFrom = 'UAH';
  amount2!: number;
  currencyTo = 'EUR';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {}

  convertCurrency(): void {
    if (this.currencyFrom === this.currencyTo) {
      this.amount2 = this.amount1;
    }
    this.currencyService
      .getExchangeRates(
        this.apiKey,
        this.currencyFrom,
        this.currencyTo,
        this.apiHost
      )
      .subscribe((curr) => {
        let res = this.amount1 * curr;
        this.amount2 = parseFloat(res.toFixed(2));
      });
  }

  resetConvert(): void {
    if (this.currencyFrom === this.currencyTo) {
      this.amount1 = this.amount2;
    }
    this.currencyService
      .getExchangeRates(
        this.apiKey,
        this.currencyTo,
        this.currencyFrom,
        this.apiHost
      )
      .subscribe((curr) => {
        let res = this.amount2 * curr;
        this.amount1 = parseFloat(res.toFixed(2));
      });
  }

  test(): void {
    console.log(this.amount2);
  }
}
