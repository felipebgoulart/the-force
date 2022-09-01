import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ForceHeaderComponent } from './force-header.component';

describe('ForceHeaderComponent', () => {
  let component: ForceHeaderComponent;
  let fixture: ComponentFixture<ForceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForceHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.isOpened = false;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test menu options', () => {
    const aboutOption: string = 'Sobre';

    it('should toggleMenu block scroll', () => {
      component.toggleMenu();

      expect(component.isOpened).toEqual(true);
      expect(document.body.style.overflow).toEqual('hidden');
    });

    it('should toggleMenu release scroll', () => {
      component.isOpened = true;
      component.toggleMenu();

      expect(component.isOpened).toEqual(false);
      expect(document.body.style.overflow).not.toEqual('hidden');
    });

    it('should onOptionSelected emit and toggle menu mobile', () => {
      spyOn(component.headerOptionEmitter, 'emit');

      component.innerWidth = 650;
      component.onOptionSelected(aboutOption);

      expect(component.isOpened).toEqual(true);
      expect(component.headerOptionEmitter.emit).toHaveBeenCalledWith(
        aboutOption
      );
    });

    it('should onOptionSelected emit and not toggle menu', () => {
      spyOn(component.headerOptionEmitter, 'emit');

      component.innerWidth = 1024;
      component.onOptionSelected(aboutOption);

      expect(component.isOpened).toEqual(false);
      expect(component.headerOptionEmitter.emit).toHaveBeenCalledWith(
        aboutOption
      );
    });

    it('should isOptionSelected return true', () => {
      component.selectedViewport = 'Sobre';

      expect(component.isOptionSelected(1)).toEqual(true);
    });
  });

  describe('test lifecycle', () => {
    it('should resize hostListener set innerWidth', () => {
      const heroEl = fixture.debugElement.query(By.css('.header'));
      heroEl.triggerEventHandler('window:resize', 785);

      component.innerWidth = 785;

      expect(component.innerWidth).toEqual(785);
    });

    it('should onChanges selectedViewport', () => {
      const changesObj: SimpleChanges = {
        selectedViewport: new SimpleChange('Sobre', 'Contato', true),
      };

      component.ngOnChanges(changesObj);

      const elementSelected: HTMLElement | null =
        document.getElementById('Contato');
      const isSelected: boolean | undefined =
        elementSelected?.classList.contains('selected');

      expect(isSelected).toEqual(true);
    });

    it('should onChanges selectedViewport false', () => {
      const changesObj: SimpleChanges = {};
      component.ngOnChanges(changesObj);

      expect(changesObj.selectedViewport).toBeUndefined();
    });

    it('should onChanges without oldEl', () => {
      const changesObj: SimpleChanges = {
        selectedViewport: new SimpleChange('Not Found', 'Contato', true),
      };

      component.ngOnChanges(changesObj);

      const elementSelected: HTMLElement | null =
        document.getElementById('Contato');
      const isSelected: boolean | undefined =
        elementSelected?.classList.contains('selected');

      expect(isSelected).toEqual(true);
    });

    it('should onChanges without newEl', () => {
      const changesObj: SimpleChanges = {
        selectedViewport: new SimpleChange('Sobre', 'Not Found', true),
      };

      component.ngOnChanges(changesObj);

      const elementSelected: HTMLElement | null =
        document.getElementById('Sobre');
      const isSelected: boolean | undefined =
        elementSelected?.classList.contains('selected');

      expect(isSelected).toEqual(false);
    });
  });
});
