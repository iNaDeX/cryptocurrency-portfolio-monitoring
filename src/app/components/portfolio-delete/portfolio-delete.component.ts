import { Component, OnInit } from '@angular/core';

import { CryptoHoldingsService } from 
    '../../services/crypto-holdings.service';
import { Holding } from '../../models/Holding';

import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-portfolio-delete',
  templateUrl: './portfolio-delete.component.html',
  styleUrls: ['./portfolio-delete.component.css']
})
export class PortfolioDeleteComponent implements OnInit {

  holding: Holding;

  constructor(private route: ActivatedRoute,
    private provider: CryptoHoldingsService,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.holding = this.provider.getHolding(+id);
  }

  delete() {
    this.provider.deleteHolding(this.holding.id);
    this.router.navigate(
      ['/']); // redirect to home
  }

}
