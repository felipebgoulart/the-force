import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IGithubUserInterface } from '../../interfaces/github-user-interface';
import { GithubService } from '../../services/github.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: GithubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientModule ],
      providers: [ GithubService ]
    })
    .compileComponents();

    service = TestBed.inject(GithubService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getGithubUser fill user', () => {
    const response: IGithubUserInterface = {
      avatar_url: '',
      html_url: ''
    };

    spyOn(service, 'getUserProfile').and.returnValue(of(response))
    component['getGithubUser']();

    fixture.detectChanges();
  
    expect(component.githubUser).toEqual(response);
  });

  it('should open page', () => {
    const windowSpy = spyOn(window, 'open');
    component.goToLink('urlGihub');

    expect(windowSpy).toHaveBeenCalledWith('urlGihub', '_blank');
  });
});
