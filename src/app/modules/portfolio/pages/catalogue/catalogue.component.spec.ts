import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ALL } from 'src/app/core/constants/strings';
import { GithubService } from '../../services/github.service';

import { CatalogueComponent } from './catalogue.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { CatalogSelectorComponent } from './components/catalog-selector/catalog-selector.component';
import { IRepos } from '../../interfaces/repos-interface';

import repositories from '../../../../../mocks/repositories.json';

describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;
  let githubService: GithubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CatalogueComponent,
        CatalogSelectorComponent,
        CatalogItemComponent,
      ],
      imports: [HttpClientModule],
      providers: [GithubService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    githubService = TestBed.inject(GithubService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('subscribes GET test', () => {
    it('should getRepos subscribe', () => {
      let responseRepos: IRepos[] = repositories;

      let responseLangs = {
        dart: 1000,
        html: 1000,
        javascript: 1000,
        css: 10,
      };

      spyOn(githubService, 'getRepos').and.returnValue(of(responseRepos));
      spyOn(githubService, 'getLanguagesRepo').and.returnValue(
        of(responseLangs)
      );

      component['getRepositories']();
      fixture.detectChanges();

      expect(component.repositories).toEqual(responseRepos);
      expect(component.repositories[0].languages).toEqual(responseLangs);
    });
  });

  describe('filter repositories test', () => {
    it('should filterProjects list all', () => {
      component.repositories = repositories;
      component.filterProjects(ALL);

      expect(component.filteredRepositories).toEqual(repositories);
    });

    it('should filterProjects list all', () => {
      let responseRepos: IRepos[] = repositories;

      responseRepos.forEach((repo: IRepos) => {
        repo.languages = {
          dart: 1000,
          html: 1000,
          javascript: 1000,
          css: 10,
        };
      });

      component.repositories = responseRepos;
      component.filterProjects('dart');

      expect(component.filteredRepositories).toEqual(repositories);
    });
  });
});
