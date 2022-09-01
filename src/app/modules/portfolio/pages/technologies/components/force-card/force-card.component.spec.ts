import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ForceCardComponent } from './force-card.component';

describe('ForceCardComponent', () => {
  let component: ForceCardComponent;
  let fixture: ComponentFixture<ForceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForceCardComponent ],
      imports: [ AngularSvgIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceCardComponent);
    component = fixture.componentInstance;

    component.cardItem = {
      color: 'black',
      description: 'dart lang',
      title: 'Flutter',
      icon: 'fa'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mouse over change color', () => {
    component.onMouseOver();
    
    expect((<HTMLElement>component.cardItemChild.nativeElement).style.color).toEqual('black');
  });

  it('should mouse out change color', () => {
    component.onMouseOut();
    
    expect((<HTMLElement>component.cardItemChild.nativeElement).style.color).not.toEqual('black');
  });
});
