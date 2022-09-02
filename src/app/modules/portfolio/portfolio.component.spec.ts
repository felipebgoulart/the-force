import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, ElementRef, QueryList } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { PortfolioComponent } from './portfolio.component';
import { GithubService } from './services/github.service';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [PortfolioComponent],
      providers: [GithubService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should isElementInViewport method test', () => {
    const element: ElementRef<HTMLElement> = component.sections.toArray()[0];
    const isElementInViewport: boolean = component['isElementInViewport'](
      element.nativeElement
    );

    expect(isElementInViewport).toEqual(true);
  });

  it('should navigateToPage method test', fakeAsync(() => {
    let spy = spyOn(
      component.sections.toArray()[1].nativeElement,
      'scrollIntoView'
    );
    component.navigateToPage('Sobre');

    expect(spy).toHaveBeenCalled();
  }));

  it('should onScroll listener event different viewport', fakeAsync(() => {
    component.selectedViewport = 'Contato';

    fixture.detectChanges();
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event('scroll'));

    expect(component.selectedViewport).toEqual('Contato');
  }));

  it('should onScroll listener event same viewport', fakeAsync(() => {
    component.selectedViewport = 'Início';
    fixture.detectChanges();
    window.dispatchEvent(new Event('scroll'));
    expect(component.selectedViewport).toEqual('Contato');
  }));

  it('should onScroll listener event is 15% heigher than contact viewport', fakeAsync(() => {
    component.selectedViewport = 'Início';
    window.scrollTo(0, 0);
    component['maxHeightToBeContact'] = 10;

    window.dispatchEvent(new Event('scroll'));
    expect(component.selectedViewport).toEqual('Início');
  }));

  it('should onScroll listener event is shorter than home viewport', fakeAsync(() => {
    component.selectedViewport = 'Início';
    component.opacityNavbar = true;
    component['percentHomeScreen'] = -0.15;
    component['customSizeHomeScreen'] = 10;
    window.scrollTo(0, 0);

    window.dispatchEvent(new Event('scroll'));
    expect(component.selectedViewport).toEqual('Contato');
  }));

  it('should onScroll listener event is heigher than home viewport', fakeAsync(() => {
    component.selectedViewport = 'Início';
    component.opacityNavbar = true;
    component['percentHomeScreen'] = -0.15;
    component['customSizeHomeScreen'] = -10;
    window.scrollTo(0, 0);

    window.dispatchEvent(new Event('scroll'));
    expect(component.selectedViewport).toEqual('Contato');
  }));
});
