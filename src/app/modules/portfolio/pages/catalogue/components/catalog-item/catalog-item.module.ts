import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogItemComponent } from './catalog-item.component';

@NgModule({
  declarations: [CatalogItemComponent],
  imports: [CommonModule],
  exports: [CatalogItemComponent],
})
export class CatalogItemModule {}
