import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-catalog-selector',
  templateUrl: './catalog-selector.component.html',
  styleUrls: ['./catalog-selector.component.scss']
})
export class CatalogSelectorComponent {

  @Input('filter') filter!: Set<string>;
  @Output('langSelectedEmitter') langSelectedEmitter: EventEmitter<string> = new EventEmitter<string>();

  public selectedIndex: number = 0;

  constructor() {}

  public onLangSelected(lang: string, index: number): void {
    this.selectedIndex = index;
    this.langSelectedEmitter.emit(lang);
  }

}
