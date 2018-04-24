import { Component, OnInit } from '@angular/core';

import { Holding } from '../../models/Holding';
import { CryptoHoldingsService } from 
		'../../services/crypto-holdings.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  holdings: Holding[];

  constructor(private provider: CryptoHoldingsService) { }

  ngOnInit() {
    this.holdings = this.provider.getHoldings().sort((a,b) => b.quantity*b.rate - a.quantity*a.rate);
  }

  saveToLocalStorage() {
    this.provider.saveHoldingsToLocalStorage();
  }

}
