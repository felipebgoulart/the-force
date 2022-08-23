import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public isSideNavOpened: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  public toggleSideNav(): void {
    this.isSideNavOpened = !this.isSideNavOpened;
  }

}
