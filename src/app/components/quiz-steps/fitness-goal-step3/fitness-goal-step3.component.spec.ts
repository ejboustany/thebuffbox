import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingFitnessGoalStep3Component } from './fitness-goal-step3.component';

describe('OnboardingStep3Component', () => {
  let component: OnboardingFitnessGoalStep3Component;
  let fixture: ComponentFixture<OnboardingFitnessGoalStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingFitnessGoalStep3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingFitnessGoalStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
