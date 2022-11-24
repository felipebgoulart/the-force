import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceCardExpComponent } from './force-card-exp.component';

describe('ForceCardExpComponent', () => {
  let component: ForceCardExpComponent;
  let fixture: ComponentFixture<ForceCardExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForceCardExpComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceCardExpComponent);
    component = fixture.componentInstance;

    component.experience = {
      companyName: '',
      logo: '',
      job: '',
      description: '',
      period: '',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
