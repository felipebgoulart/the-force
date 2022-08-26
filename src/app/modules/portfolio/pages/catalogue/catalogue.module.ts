import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue.component';
import { CatalogItemModule } from './components/catalog-item/catalog-item.module';
import { CatalogSelectorModule } from './components/catalog-selector/catalog-selector.module';

@NgModule({
  declarations: [
    CatalogueComponent
  ],
  imports: [
    CommonModule,
    CatalogItemModule,
    CatalogSelectorModule,

  ],
  exports: [CatalogueComponent]
})
export class CatalogueModule { }
