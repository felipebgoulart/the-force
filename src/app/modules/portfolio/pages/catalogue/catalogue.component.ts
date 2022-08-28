import { Component, OnInit } from '@angular/core';
import { RepositoryItemModel } from 'src/app/shared/models/reposiroty-item-model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  public repositories: RepositoryItemModel[] = [];

  public reposotory: RepositoryItemModel = {
    name: 'Weather',
    category: 'APP'
  };

  constructor() { }

  ngOnInit(): void {
    this.repositories.push(
      this.reposotory,
      this.reposotory,
      this.reposotory,
      this.reposotory,
      this.reposotory,
      this.reposotory,
      this.reposotory,
      this.reposotory,
      this.reposotory,
      this.reposotory,
      this.reposotory,
    )
  }

}
