import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForceButtonModule } from '../modules/portfolio/pages/about/components/force-button/force-button.module';
import { ForceHeaderModule } from './components/force-header/force-header.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ForceHeaderModule],
  exports: [ForceHeaderModule, ForceButtonModule],
})
export class SharedModule {}
