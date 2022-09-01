import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { ForceButtonComponent } from './components/force-button/force-button.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent, ForceButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onGetInTouchClick dispatch', () => {
    const spy = spyOn(component.navigateToAnchor, 'emit');
    component.onGetInTouchClick();

    expect(component.navigateToAnchor.emit).toHaveBeenCalledWith('Contato');
  });

  it('should downloadCV dispatch', () => {
    const spy = spyOn(window, 'open');
    component.downloadCV();

    expect(spy).toHaveBeenCalledWith(
      'https://github.com/Hideki-Goulart/the-force/raw/develop/Felipe%20Barbosa%20Goulart%20-%20CV.pdf',
      '_blank'
    );
  });
});
