import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavMenuComponent } from './sidenav-menu.component';



@NgModule({
  declarations: [
    SidenavMenuComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidenavMenuComponent
  ]
})
export class SidenavMenuModule { }
