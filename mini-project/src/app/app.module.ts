import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EuropeRegionComponent } from './europe-region/europe-region.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { HttpClientModule } from '@angular/common/http';
import { CapitalComponent } from './europe-region/capital/capital.component';
import { CountriesComponent } from './currencies/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    EuropeRegionComponent,
    CurrenciesComponent,
    CapitalComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
