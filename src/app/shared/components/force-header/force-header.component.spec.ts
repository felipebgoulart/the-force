import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceHeaderComponent } from './force-header.component';

describe('ForceHeaderComponent', () => {
  let component: ForceHeaderComponent;
  let fixture: ComponentFixture<ForceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForceHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
