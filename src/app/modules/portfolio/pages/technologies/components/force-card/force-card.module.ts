import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForceCardComponent } from './force-card.component';
import { AngularSvgIconModule, SvgIconComponent } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ForceCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  exports: [ForceCardComponent]
})
export class ForceCardModule { }
