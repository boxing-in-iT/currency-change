import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currnecyService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-main',
  templateUrl: './currency-main.component.html',
  styleUrls: ['./currency-main.component.css'],
})
export class CurrencyMainComponent implements OnInit {
  exchangeRates: any = {};
  amount1!: number;
  currencyFrom = 'UAH';
  amount2!: number;
  currencyTo = 'EUR';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {}

  convertCurrency(): void {
    if (this.currencyFrom === this.currencyTo) {
      this.amount2 = this.amount1;
    } else {
      this.currencyService
        .getExchangeRates(this.currencyFrom, this.currencyTo, this.amount1)
        .subscribe((curr) => {
          let res = curr.result;
          this.amount2 = parseFloat(res.toFixed(2));
        });
    }
  }

  resetConvert(): void {
    if (this.currencyFrom === this.currencyTo) {
      this.amount1 = this.amount2;
    } else {
      this.currencyService
        .getExchangeRates(this.currencyTo, this.currencyFrom, this.amount2)
        .subscribe((curr) => {
          let res = curr.result;
          this.amount1 = parseFloat(res.toFixed(2));
        });
    }
  }

  test(): void {
    console.log(this.amount2);
  }
}
