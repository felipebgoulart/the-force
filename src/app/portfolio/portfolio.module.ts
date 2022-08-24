import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './components/home/home.module';
import { AboutModule } from './components/about/about.module';


@NgModule({
  declarations: [
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    HomeModule,
    AboutModule
  ]
})
export class PortfolioModule { }
