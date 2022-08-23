import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavMenuModule } from './components/sidenav-menu/sidenav-menu.module';
import { ForceButtonModule } from './components/force-button/force-button.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    SidenavMenuModule,
    ForceButtonModule,
  ]
})
export class SharedModule { }
