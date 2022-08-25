import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ForceCardExpModule } from 'src/app/shared/components/force-card-exp/force-card-exp.module';



@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ForceCardExpModule
  ],
  exports: [ResumeComponent]
})
export class ResumeModule { }
