import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGithubUserInterface } from '../interfaces/github-user-interface';
import { IRepos } from '../interfaces/repos-interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  public getUserProfile(): Observable<IGithubUserInterface> {
    return this.http.get<IGithubUserInterface>(
      'https://api.github.com/users/Hideki-Goulart'
    );
  }

  public getRepos(): Observable<IRepos[]> {
    return this.http.get<IRepos[]>(
      'https://api.github.com/users/Hideki-Goulart/repos'
    );
  }

  public getLanguagesRepo(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
