import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyHeaderComponent } from './currency-header/currency-header.component';
import { CurrencyMainComponent } from './currency-main/currency-main.component';

@NgModule({
  declarations: [AppComponent, CurrencyHeaderComponent, CurrencyMainComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
