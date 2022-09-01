import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForceButtonComponent } from './force-button.component';



@NgModule({
  declarations: [
    ForceButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ForceButtonComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ForceButtonModule { }
