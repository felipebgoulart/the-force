import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceButtonComponent } from './force-button.component';

describe('ForceButtonComponent', () => {
  let component: ForceButtonComponent;
  let fixture: ComponentFixture<ForceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForceButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
