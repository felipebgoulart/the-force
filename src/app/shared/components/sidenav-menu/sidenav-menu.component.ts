import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItemModel } from '../../models/menu-item-model';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  @Input('isSideNavOpened') isSideNavOpened: boolean = false;
  @Output() itemClickEmitter: EventEmitter<string> = new EventEmitter<string>();

  public items: MenuItemModel[] = []

  private home: MenuItemModel = {
    icon: 'fa-solid fa-house',
    name: 'Home',
    link: '#home'
  };

  private about: MenuItemModel = {
    icon: 'fa-solid fa-user-astronaut',
    name: 'About',
    link: '#about'
  };

  private technologies: MenuItemModel = {
    icon: 'fa-brands fa-connectdevelop',
    name: 'Technologies',
    link: '#technologies'
  };

  private resume: MenuItemModel = {
    icon: 'fa-solid fa-user-graduate',
    name: 'Resume',
    link: '#resume'
  };

  private portfolio: MenuItemModel = {
    icon: 'fa-solid fa-code',
    name: 'Portfolio',
    link: '#portfolio'
  };

  private contact: MenuItemModel = {
    icon: 'fa-solid fa-id-card',
    name: 'Contact',
    link: '#contact'
  };

  constructor() {}

  ngOnInit(): void {
    this.items.push(
      this.home,
      this.about,
      this.technologies,
      this.resume,
      this.portfolio,
      this.contact
    );
  }

  public onItemClicked(id: string) {
    this.itemClickEmitter.emit(id);
  }

}
