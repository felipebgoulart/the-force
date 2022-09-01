import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { IcardItem } from '../../interfaces/card-item-interface';

@Component({
  selector: 'app-force-card',
  templateUrl: './force-card.component.html',
  styleUrls: ['./force-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ForceCardComponent implements OnInit {

  @ViewChild('cardItemChild') cardItemChild!: ElementRef;
  
  @Input('cardItem') cardItem!: IcardItem;

  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit(): void { }

  public onMouseOver(): void {
    this.renderer.setStyle(this.cardItemChild.nativeElement, 'color', this.cardItem.color);
    
  }

  public onMouseOut(): void {
    this.renderer.removeStyle(this.cardItemChild.nativeElement, 'color');
  }

}
