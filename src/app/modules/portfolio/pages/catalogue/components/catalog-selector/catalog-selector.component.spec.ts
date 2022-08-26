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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
