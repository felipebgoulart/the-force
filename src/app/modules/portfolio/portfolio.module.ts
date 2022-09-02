import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { TechnologiesModule } from './pages/technologies/technologies.module';
import { CatalogueModule } from './pages/catalogue/catalogue.module';
import { ResumeModule } from './pages/resume/resume.module';
import { ContactModule } from './pages/contact/contact.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    HomeModule,
    AboutModule,
    TechnologiesModule,
    ResumeModule,
    CatalogueModule,
    ContactModule,
  ],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
