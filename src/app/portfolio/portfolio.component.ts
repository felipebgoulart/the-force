import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @ViewChild('home', {static: true}) home!: ElementRef<HTMLElement>;
  @ViewChild('about', {static: true}) about!: ElementRef<HTMLElement>;
  // @ViewChild('about', {static: true}) about!: ElementRef<HTMLElement>;
  // @ViewChild('about', {static: true}) about!: ElementRef<HTMLElement>;
  // @ViewChild('about', {static: true}) about!: ElementRef<HTMLElement>;

  public isSideNavOpened: boolean = false;
  
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  public toggleSideNav(): void {
    this.isSideNavOpened = !this.isSideNavOpened;
  }

  public navigateToPage(id: string) {
    
    this.isSideNavOpened = false;
    switch (id) {
      case '#home':
        this.home.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case '#about':
        this.about.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      default:
        this.home.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        break;   
    }
  }

}
