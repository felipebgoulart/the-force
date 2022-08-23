import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-force-button',
  templateUrl: './force-button.component.html',
  styleUrls: ['./force-button.component.scss']
})
export class ForceButtonComponent implements OnInit {

  @Input('outlined') outlined: boolean = false;
  @Input('text') text: string = '';
  @Input('size') size: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
