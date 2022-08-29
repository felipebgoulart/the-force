import { Component, Input, OnInit } from '@angular/core';
import { IRepos } from 'src/app/modules/portfolio/models/repos-interface';
import { RepositoryItemModel } from 'src/app/shared/models/reposiroty-item-model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {

  @Input('repository') repository!: IRepos;

  constructor() { }

  ngOnInit(): void {
  }

  openPageUrl(url: string){
    window.open(url, "_blank");
  }

}
