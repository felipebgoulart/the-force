import { Component, Input, OnInit } from '@angular/core';
import { MenuItemModel } from '../../models/menu-item-model';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  @Input('isSideNavOpened') isSideNavOpened: boolean = false;

  public items: MenuItemModel[] = []

  private home: MenuItemModel = {
    icon: 'fa-solid fa-house',
    name: 'Home'
  };

  private about: MenuItemModel = {
    icon: 'fa-solid fa-user-astronaut',
    name: 'About'
  };

  private technologies: MenuItemModel = {
    icon: 'fa-brands fa-connectdevelop',
    name: 'Technologies'
  };

  private resume: MenuItemModel = {
    icon: 'fa-solid fa-user-graduate',
    name: 'Resume'
  };

  private portfolio: MenuItemModel = {
    icon: 'fa-solid fa-code',
    name: 'Portfolio'
  };

  private contact: MenuItemModel = {
    icon: 'fa-solid fa-id-card',
    name: 'Contact'
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

}
