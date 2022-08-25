import { Component, Input, OnInit } from '@angular/core';
import { cardItem } from '../../models/card-item-model';

@Component({
  selector: 'app-force-card',
  templateUrl: './force-card.component.html',
  styleUrls: ['./force-card.component.scss']
})
export class ForceCardComponent implements OnInit {

  @Input('cardItem') cardItem!: cardItem;

  constructor() {}

  ngOnInit(): void {}

}
