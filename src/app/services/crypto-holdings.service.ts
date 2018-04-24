import { Injectable } from '@angular/core';
import { Holding } from '../models/Holding';
import { CryptoRateService } from './crypto-rate.service';

import { TitleCasePipe, UpperCasePipe,  } from '@angular/common';

@Injectable()
export class CryptoHoldingsService {

  private holdings: Holding[]; // holds the data

  constructor(private cryptoRateService: CryptoRateService) {
    this.holdings = [];
    this.loadFromLocalStorage(); // if available, load, otherwise, keep empty array
    setInterval(() => { this.updateHoldingsInfo(); }, 1000 * 60 * 10); // update rates automatically every 10 minutes
  }

  getHoldings(): Holding[] {
    return this.holdings;
  }

  getHolding(id: number): Holding { // get specific asset (returns a copy)
    let holdings:Holding[] = this.getHoldings();
    let holding: Holding = holdings.find(
        h => {return (h.id == id)});
    return Object.assign({}, holding); // return a copy
  }

  getPrevNextHoldingID(id: number): number[] { // get previous & next IDs for book-like display
    let holdings:Holding[] = this.getHoldings();
    let prev: number = -1; // = not applicable
    let next: number = -1; // = not applicable
    let seen: boolean = false;
    for(let i=0; i<holdings.length; i++) {
      if(seen) { 
        next = holdings[i].id; // store ID of the elem just after the searched one
        break;
      } else if(!seen && holdings[i].id !== id){
        prev = holdings[i].id; // continuously update prev ID
      }

      if(holdings[i].id === id) {
        seen = true;
      }
    }
    return [prev, next];
  }

  private getNextID(): number { // get next available ID for storage
  	let holdings:Holding[] = this.getHoldings();
  	let maxId: number;
  	
  	if (holdings && holdings.length > 0) {
  		maxId = holdings[holdings.length - 1].id;	
  	} else {
  		maxId = 0;
  	}

  	return maxId + 1;
  }
  
  saveHolding(holding: Holding): void { // save asset into local inmemory database (array)
    holding.name = new TitleCasePipe().transform(holding.name); // correctly format once and for all
    holding.symbol = new UpperCasePipe().transform(holding.symbol); // correctly format once and for all

		let holdings:Holding[] = this.getHoldings();
		let target: Holding =
			holdings.find(h => {return (h.id == holding.id)}); // check if existing
		if(!target) {
      holding.id = this.getNextID(); // update ID correctly
			holdings.push(holding); // add to array
      this.cryptoRateService // get rate
        .getRate(holding.symbol)
        .subscribe((result:any) => {
          holding.rate = result.rate;
        });
		} else {
			Object.assign(target, holding); // if existing, update
    }
	}

	deleteHolding(id: number): void { // remove from local in-memory database (array)
		let holdings:Holding[] = this.getHoldings();
		for(let i = holdings.length - 1; i >= 0; i--) { // find element with specific ID and delete it
			if(holdings[i].id === id) {
			   holdings.splice(i, 1);
			   break;
			}
    }
	}

  saveHoldingsToLocalStorage(): void { // save data to localStorage
    localStorage.setItem("crypto_holdings", JSON.stringify(this.holdings));
  }

  private loadFromLocalStorage(): void { // load from localStorage
    if(localStorage.getItem("crypto_holdings") !== null) {
      this.holdings = JSON.parse(localStorage["crypto_holdings"]);
    }
  }

  updateHoldingsInfo(): void { // query current rates for all the assets
    for(let holding of this.holdings) {
      this.cryptoRateService
        .getRate(holding.symbol)
        .subscribe((result:any) => {
          holding.rate = result.rate;
        });
    }
  }

  getTotalNetWorth(): number { // get sum of total holdings' values
    let sum: number = 0;
    for(let holding of this.holdings) {
      sum+= holding.quantity * ( (holding.rate!=null) ? holding.rate:0 );
    }
    return sum;
  }

}
