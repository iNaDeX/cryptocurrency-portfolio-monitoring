import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioAddEditComponent } from './components/portfolio-add-edit/portfolio-add-edit.component';
import { PortfolioEntryComponent } from './components/portfolio-entry/portfolio-entry.component';
import { PortfolioDeleteComponent } from './components/portfolio-delete/portfolio-delete.component';
import { CryptoRateService } from './services/crypto-rate.service';
import { CryptoHoldingsService } from './services/crypto-holdings.service';
import { AppRoutingModule } from './/app-routing.module';
import { PortfolioSummaryComponent } from './components/portfolio-summary/portfolio-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    PortfolioAddEditComponent,
    PortfolioEntryComponent,
    PortfolioDeleteComponent,
    PortfolioSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [CryptoRateService, CryptoHoldingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
