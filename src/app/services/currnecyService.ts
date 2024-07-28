import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiKey = '3c48c813ccmsh11f728bc12eddbfp1a6461jsn339e951026ac';
  private apiHost = 'currency-conversion-and-exchange-rates.p.rapidapi.com';
  private apiUrl =
    'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert';

  constructor(private http: HttpClient) {}

  getExchangeRates(
    fromCurrency: string,
    toCurrency: string,
    amount: number = 1
  ): Observable<any> {
    const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.apiKey)
      .set('x-rapidapi-host', this.apiHost);
    const params = {
      from: fromCurrency,
      to: toCurrency,
      amount: amount.toString(),
    };
    return this.http
      .get(this.apiUrl, { headers, params })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
