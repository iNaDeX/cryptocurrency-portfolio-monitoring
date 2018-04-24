import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { TitleCasePipe, DecimalPipe,  } from '@angular/common';

import { Holding } from '../../models/Holding';
import { CryptoHoldingsService } from 
    '../../services/crypto-holdings.service';


@Component({
  selector: 'app-portfolio-entry',
  templateUrl: './portfolio-entry.component.html',
  styleUrls: ['./portfolio-entry.component.css']
})
export class PortfolioEntryComponent implements OnInit,OnDestroy {

  holding: Holding;
	sub: any;
  totalHoldings: number;
  prev: number;
  next: number;

  constructor(private route: ActivatedRoute, private provider: CryptoHoldingsService) {
    this.holding = null;
  }

  ngOnInit() {
    this.totalHoldings = this.provider.getHoldings().length;

  	this.sub = 
      this.route.params.subscribe(params => { // on route change
        let id: string = params['id'];
        let vals = this.provider.getPrevNextHoldingID(+id); // get prev & next holdings IDs to iterate
        this.prev = vals[0];
        this.next = vals[1];
        this.holding = this.provider.getHolding(+id);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
