import { Component, OnInit } from '@angular/core';
import { ALL, GITHUB_IMAGE_NAME, GITHUB_IMAGE_URL } from 'src/app/core/constants/strings';
import { IRepos } from '../../models/repos-interface';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  public repositories: IRepos[] = [];
  public filteredRepositories: IRepos[] = [];
  public languagesFilter: Set<string> = new Set<string>([ALL]);

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.getRepos();
  }

  private getRepos(): void {
    this.githubService.getRepos()
      .subscribe((repos: IRepos[]) => {
        this.repositories = this.filteredRepositories = repos;
        this.getRepoLanguages();
      });
  }

  private getRepoLanguages(): void {
    this.repositories = this.repositories.map((repo: IRepos) => {
      repo.image_url = `${GITHUB_IMAGE_URL}/${repo.name}/${repo.default_branch}/${GITHUB_IMAGE_NAME}`;

      this.githubService.getLanguagesRepo(repo.languages_url)
        .subscribe((languages: object) => {
          repo.languages = languages;
          this.filterOptions(languages);
        });
        
      return repo;
    });
  }

  public filterProjects(lang: string): void {
    if (lang == ALL) {
      this.filteredRepositories = this.repositories;
    } else {
      this.filteredRepositories = this.repositories.filter((repo: IRepos) => {

        let linesCount = Object.values(repo.languages).reduce((previous, next) => previous + next);
        let filter: boolean = false;

        Object.entries(repo.languages).forEach((entry: any[]) => {
          if (entry[0] == lang) {
            filter = (Number.parseInt(((entry[entry.length - 1] * 100) / linesCount).toPrecision(2)) > 10);
          }
        });

        return lang in repo.languages && filter;
      });
    }
  }

  private filterOptions(languages: object): void {
    let keysLang: string[] = [];
    let linesCount = Object.values(languages).reduce((previous, next) => previous + next);
    Object.entries(languages).forEach((entry: any[]) => {
      if (Number.parseInt(((entry[entry.length - 1] * 100) / linesCount).toPrecision(2)) > 10) {
        keysLang.push(entry[0])
      };
    });
    

    keysLang.forEach((key: string) => {
      this.languagesFilter.add(key);
    });
  }

}
