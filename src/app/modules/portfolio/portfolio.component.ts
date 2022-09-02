import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
} from '@angular/core';

const regions: string = 'Início,Sobre,Serviços,Currículo,Catálogo,Contato';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  @ViewChildren(regions) sections!: QueryList<ElementRef<HTMLElement>>;

  @HostListener('window:scroll', ['$event'])
  public onScroll(event: Event): void {
    const homeElement: ElementRef<HTMLElement> | undefined = this.sections
      .toArray()
      .find(element => element.nativeElement.id == 'Início');

    const activeSection = this.sections
      .toArray()
      .findIndex(section => this.isElementInViewport(section.nativeElement));

    if (this.selectedViewport != regions.split(',')[activeSection]) {
      this.selectedViewport = regions.split(',')[activeSection];
    }

    if (
      window.scrollY >=
      document.documentElement.scrollHeight - this.maxHeightToBeContact
    ) {
      this.selectedViewport = regions.split(',')[5];
    }

    if (
      window.scrollY >=
        (homeElement!.nativeElement.scrollHeight + this.customSizeHomeScreen) *
          this.percentHomeScreen &&
      this.opacityNavbar
    ) {
      this.opacityNavbar = false;
    }

    if (
      window.scrollY <=
        (homeElement!.nativeElement.scrollHeight + this.customSizeHomeScreen) *
          this.percentHomeScreen &&
      !this.opacityNavbar
    ) {
      this.opacityNavbar = true;
    }
  }

  public selectedViewport: string = '';
  public opacityNavbar: boolean = true;
  private maxHeightToBeContact: number = 800;
  private percentHomeScreen: number = 0.15;
  private customSizeHomeScreen: number = 0;

  constructor() {}

  public navigateToPage(id: string): void {
    const element: ElementRef<HTMLElement> | undefined = this.sections.find(
      element => element.nativeElement.id === id
    );
    element!.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'end',
    });
  }

  private isElementInViewport(el: any): boolean {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  }
}
