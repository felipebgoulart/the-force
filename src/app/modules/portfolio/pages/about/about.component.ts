import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @Output('navigateToAnchor') navigateToAnchor: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public onGetInTouchClick(): void {
    this.navigateToAnchor.emit('Contato');
  }

  public downloadCV() {
    window.open(
      'https://github.com/felipebgoulart/the-force/raw/develop/Felipe%20Barbosa%20Goulart%20-%20CV.pdf',
      '_blank'
    );
  }
}
