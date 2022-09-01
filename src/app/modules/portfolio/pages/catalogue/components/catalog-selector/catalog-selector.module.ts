import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogSelectorComponent } from './catalog-selector.component';

@NgModule({
  declarations: [CatalogSelectorComponent],
  imports: [CommonModule],
  exports: [CatalogSelectorComponent],
})
export class CatalogSelectorModule {}
