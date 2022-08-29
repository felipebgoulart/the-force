import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, QueryList, Renderer2, SimpleChanges, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-force-header',
  templateUrl: './force-header.component.html',
  styleUrls: ['./force-header.component.scss']
})
export class ForceHeaderComponent implements OnInit, OnChanges {

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  @ViewChildren('item') items!: QueryList<ElementRef>;

  @Input('selectedViewport') selectedViewport!: string;
  @Input('opacityNavbar') opacityNavbar!: boolean;

  @Output('headerOptionEmitter') headerOptionEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output('selectedViewportChange') selectedViewportChange: EventEmitter<string> = new EventEmitter<string>();
  @Output('opacityNavbarChange') opacityNavbarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public menuOptions: string[] = [];
  public isOpened: boolean = false;
  public innerWidth: any;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.menuOptions.push(
      'Início',
      'Sobre',
      'Serviços',
      'Currículo',
      'Catálogo',
      'Contato'
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.items && changes.selectedViewport) {
      var oldEl: any = this.items.find(element => element.nativeElement.id == changes.selectedViewport.previousValue);
      var newEl: any = this.items.find(element => element.nativeElement.id == changes.selectedViewport.currentValue);
      
      if (oldEl) {
        this.renderer.removeClass(oldEl.nativeElement, 'selected')
      }

      if (newEl) {
        this.renderer.addClass(newEl.nativeElement, 'selected')
      }
    }
  }

  public onOptionSelected(fragment: string) {
    this.headerOptionEmitter.emit(fragment);

    if (this.innerWidth <= 765) {
      this.toggleMenu();
    }
  }

  public isOptionSelected(index: number) {
    return this.menuOptions[index] == this.selectedViewport;
  }

  public toggleMenu(): void {
    this.isOpened = !this.isOpened;
  }

}
