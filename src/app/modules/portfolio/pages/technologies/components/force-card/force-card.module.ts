import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForceCardComponent } from './force-card.component';



@NgModule({
  declarations: [
    ForceCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ForceCardComponent]
})
export class ForceCardModule { }
