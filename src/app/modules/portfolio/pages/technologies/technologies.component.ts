import { Component, OnInit } from '@angular/core';
import { cardItem } from 'src/app/shared/models/card-item-model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  public technologies: cardItem[] = [];

  public angular: cardItem = {
    icon: 'fa-brands fa-angular',
    title: 'Angular',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm.'
  }

  constructor() { }

  ngOnInit(): void {
    this.technologies.push(
      this.angular,
      this.angular,
      this.angular,
      this.angular,
      this.angular,
      this.angular,
    )
  }

}

