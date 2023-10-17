import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getExchangeRates(
    apiKey: string,
    baseCurrency: string,
    toCurrency: string,
    apiHost: string
  ): Observable<any> {
    const headers = new HttpHeaders()
      .set('X-Rapidapi-Key', apiKey)
      .set('X-Rapidapi-Host', apiHost);
    const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${baseCurrency}&to=${toCurrency}&q=1`;
    return this.http.get(url, { headers });
  }
}
