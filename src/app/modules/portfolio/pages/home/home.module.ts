import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ForceButtonModule } from 'src/app/modules/portfolio/pages/about/components/force-button/force-button.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ForceButtonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
