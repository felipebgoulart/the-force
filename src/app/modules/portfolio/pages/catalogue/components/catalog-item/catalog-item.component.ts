import { Component, Input, OnInit } from '@angular/core';
import { RepositoryItemModel } from 'src/app/shared/models/reposiroty-item-model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {

  @Input('repository') repository!: RepositoryItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
