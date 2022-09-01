import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForceCardExpComponent } from './force-card-exp.component';

@NgModule({
  declarations: [ForceCardExpComponent],
  imports: [CommonModule],
  exports: [ForceCardExpComponent],
})
export class ForceCardExpModule {}
