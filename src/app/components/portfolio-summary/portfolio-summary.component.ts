import { Component, OnInit, AfterViewInit} from '@angular/core';

import { Holding } from '../../models/Holding';
import { CryptoHoldingsService } from 
    '../../services/crypto-holdings.service';
    
import { Chart } from 'chart.js';

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrls: ['./portfolio-summary.component.css']
})
export class PortfolioSummaryComponent implements OnInit, AfterViewInit{

  holdings: Holding[];
  totalNetWorth: number;

  chart = []; // This will hold our chart element

  data = {}; // this will hold the chart's data

  constructor(private provider: CryptoHoldingsService) { }

  ngOnInit() {
    this.holdings = this.provider.getHoldings().filter(h => h.rate != null);
    this.totalNetWorth = this.provider.getTotalNetWorth();
  }

  ngAfterViewInit() { // once view is rendered
    this.data = {
      datasets: [{
          data: this.holdings.map(h => this.precisionRound(h.quantity * h.rate,2)), // map to value
          backgroundColor: this.getColorArray(this.holdings.length) // create random colors
      }],
  
      labels: this.holdings.map(h => h.name)
    };

    var ctx = document.getElementById("canvas") as HTMLCanvasElement;
    var chart = new Chart(ctx,{
      type: 'pie',
      data: this.data,
      options: {}
    });
  }
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  // round "number" to "precision" decimals
  precisionRound(number:number, precision:number):number {
    let factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  getColorArray(size: number): string[] {
    let colors = [];
    for(let i=0;i<size;i++) {
      colors.push(this.getRandomColor());
    }
    return colors;
  }

  getRandomColor(): string { // credits: https://stackoverflow.com/a/1484514
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}