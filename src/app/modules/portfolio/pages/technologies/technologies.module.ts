import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesComponent } from './technologies.component';
import { ForceCardModule } from './components/force-card/force-card.module';


@NgModule({
  declarations: [
    TechnologiesComponent
  ],
  imports: [
    CommonModule,
    ForceCardModule
  ],
  exports: [TechnologiesComponent]
})
export class TechnologiesModule { }
