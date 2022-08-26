import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

const regions: string = 'home,about,technologies,resume,catalogue,contact';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {

  @ViewChildren(regions) sections!: QueryList<ElementRef<HTMLElement>>;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {

    const homeElement: ElementRef<HTMLElement> | undefined = this.sections.toArray().find(element => element.nativeElement.id == 'home');

    const activeSection = this.sections.toArray()
      .findIndex(section => this.isElementInViewport(section.nativeElement));
    

    if (this.selectedViewport != regions.split(',')[activeSection]) {      
      this.selectedViewport = regions.split(',')[activeSection]
    }

    if (window.scrollY >= document.documentElement.scrollHeight - 800) {
      this.selectedViewport = regions.split(',')[5];
    }

    if (window.scrollY > (homeElement!.nativeElement.scrollHeight * .15) && this.opacityNavbar) {
      this.opacityNavbar = false;
    }

    if (window.scrollY < (homeElement!.nativeElement.scrollHeight * .15) && !this.opacityNavbar) {
      this.opacityNavbar = true;
      
    }
  }

  public selectedViewport: string = '';
  public opacityNavbar: boolean = true;

  constructor() {}

  public navigateToPage(id: string) {
    const element: ElementRef<HTMLElement> | undefined = this.sections.find(element => element.nativeElement.id === id);
    element!.nativeElement.scrollIntoView({ behavior: "smooth", block: 'start', inline: 'end' });
  }

  private isElementInViewport(el: any) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

}
