import { Component, Input, OnInit } from '@angular/core';
import { ExperienceItemModel } from 'src/app/shared/models/experience-item-model';

@Component({
  selector: 'app-force-card-exp',
  templateUrl: './force-card-exp.component.html',
  styleUrls: ['./force-card-exp.component.scss']
})
export class ForceCardExpComponent implements OnInit {

  @Input('experience') experience!: ExperienceItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
