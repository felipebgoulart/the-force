import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSelectorComponent } from './catalog-selector.component';

describe('CatalogSelectorComponent', () => {
  let component: CatalogSelectorComponent;
  let fixture: ComponentFixture<CatalogSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogSelectorComponent);
    component = fixture.componentInstance;

    component.filter = new Set<string>([
      'dart',
      'camel'
    ]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onLangSelected emit index', () => {
    const langSpy = spyOn(component.langSelectedEmitter, 'emit');
    component.onLangSelected('dart', 0);
    
    expect(component.langSelectedEmitter.emit).toHaveBeenCalledOnceWith('dart');
  });
});
