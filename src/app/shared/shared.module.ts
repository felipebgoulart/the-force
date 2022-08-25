import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavMenuModule } from './components/sidenav-menu/sidenav-menu.module';
import { ForceButtonModule } from './components/force-button/force-button.module';
import { ForceCardModule } from './components/force-card/force-card.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ForceCardModule,
  ],
  exports: [
    SidenavMenuModule,
    ForceButtonModule,
    ForceCardModule
  ]
})
export class SharedModule { }
