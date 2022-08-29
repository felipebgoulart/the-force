import { Component, OnInit } from '@angular/core';
import { IGithubUserInterface } from '../../models/github-user-interface';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public linkedin: string = 'https://www.linkedin.com/in/felipe-goulart-a6a759152/';
  public githubUser!: IGithubUserInterface;

  constructor(
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    this.getGithubUser();
  }

  private getGithubUser(): void {
    this.githubService.getUserProfile()
      .subscribe((user: IGithubUserInterface) => {
        this.githubUser = user;
      });
  }

  public goToLink(url: string): void {
    window.open(url, "_blank");
  }

}
