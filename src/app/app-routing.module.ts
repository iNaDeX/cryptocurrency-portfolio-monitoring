import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from 
		'./components/portfolio/portfolio.component';
import { PortfolioAddEditComponent } from 
		'./components/portfolio-add-edit/portfolio-add-edit.component';
import { PortfolioEntryComponent } from 
    './components/portfolio-entry/portfolio-entry.component';
import { PortfolioDeleteComponent } from 
    './components/portfolio-delete/portfolio-delete.component';

const routes: Routes = [
  { path: '', 						component: PortfolioComponent },
  { path: 'details/:id', 	component: PortfolioEntryComponent },
  { path: 'add', 					component: PortfolioAddEditComponent },
  { path: 'edit/:id', 		component: PortfolioAddEditComponent },
  { path: 'delete/:id', 		component: PortfolioDeleteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}