import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingProteinMixStep9Component } from './protein-mix-step9.component';

describe('OnboardingProteinMixStep9Component', () => {
  let component: OnboardingProteinMixStep9Component;
  let fixture: ComponentFixture<OnboardingProteinMixStep9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingProteinMixStep9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingProteinMixStep9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
