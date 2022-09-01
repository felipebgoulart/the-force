import { Component, Input, OnInit } from '@angular/core';
import { IRepos } from 'src/app/modules/portfolio/interfaces/repos-interface';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss'],
})
export class CatalogItemComponent implements OnInit {
  @Input('repository') repository!: IRepos;

  constructor() {}

  ngOnInit(): void {}

  public openPageUrl(url: string): void {
    window.open(url, '_blank');
  }
}
