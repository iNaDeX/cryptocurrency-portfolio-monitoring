import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Holding } from '../../models/Holding';
import { CryptoHoldingsService } from 
          '../../services/crypto-holdings.service';

@Component({
  selector: 'app-portfolio-add-edit',
  templateUrl: './portfolio-add-edit.component.html',
  styleUrls: ['./portfolio-add-edit.component.css']
})
export class PortfolioAddEditComponent implements OnInit {

  holding: Holding;
  title: string;

  constructor(private route: ActivatedRoute,
      private router: Router,
  		private cryptoHoldingsService: CryptoHoldingsService) { }

  ngOnInit() {
  	
  	let id = this.route.snapshot.params['id'];
    if (id) { // if ID is set, it means we are editing an existing item
        this.title = 'Edit Asset';
        this.holding = this.cryptoHoldingsService.getHolding(+id);
    } else { // else we are editing a new empty one
    	this.title = "Add Asset";
      this.holding = new Holding();
		}
  }

  saveHolding() {
    this.cryptoHoldingsService.saveHolding(this.holding);
    this.router.navigate(
      ['/details', this.holding.id]); // redirect to the just created item
  }

}
