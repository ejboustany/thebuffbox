import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingExerciseFreqStep2Component } from './exercise-freq-step2.component';

describe('OnboardingStep2Component', () => {
  let component: OnboardingExerciseFreqStep2Component;
  let fixture: ComponentFixture<OnboardingExerciseFreqStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingExerciseFreqStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingExerciseFreqStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
