import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceCardComponent } from './force-card.component';

describe('ForceCardComponent', () => {
  let component: ForceCardComponent;
  let fixture: ComponentFixture<ForceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
