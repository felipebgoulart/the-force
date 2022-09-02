import { TestBed } from '@angular/core/testing';
import { IGithubUserInterface } from '../interfaces/github-user-interface';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { GithubService } from './github.service';
import { IRepos } from '../interfaces/repos-interface';

describe('GithubService', () => {
  let httpMock: HttpTestingController;
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test GET methods', () => {
    it('should getUserProfile return observable', () => {
      const gitProfileResponse: IGithubUserInterface = {
        avatar_url: '',
        html_url: '',
      };

      service.getUserProfile().subscribe(response => {
        expect(response).toEqual(gitProfileResponse);
      });

      const req = httpMock.expectOne(
        'https://api.github.com/users/felipebgoulart'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(gitProfileResponse);

      httpMock.verify();
    });

    it('should getRepos return observable', () => {
      const reposResponse: IRepos[] = [
        {
          id: '',
          clone_url: '',
          default_branch: '',
          description: '',
          downloads_url: '',
          html_url: '',
          image_url: '',
          languages: {},
          languages_url: '',
          name: '',
        },
      ];

      service.getRepos().subscribe(response => {
        expect(response).toEqual(reposResponse);
      });

      const req = httpMock.expectOne(
        'https://api.github.com/users/felipebgoulart/repos'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(reposResponse);

      httpMock.verify();
    });

    it('should getLanguagesRepo return observable', () => {
      const languageResponse: any = {
        Dart: 1000,
      };

      service
        .getLanguagesRepo(
          'https://api.github.com/users/felipebgoulart/languages'
        )
        .subscribe(response => {
          expect(response).toEqual(languageResponse);
        });

      const req = httpMock.expectOne(
        'https://api.github.com/users/felipebgoulart/languages'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(languageResponse);

      httpMock.verify();
    });
  });
});
