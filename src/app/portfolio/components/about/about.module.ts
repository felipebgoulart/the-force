import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ForceButtonModule } from 'src/app/shared/components/force-button/force-button.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    ForceButtonModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
