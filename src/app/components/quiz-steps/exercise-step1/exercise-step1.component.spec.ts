import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingExerciseStep1Component } from './exercise-step1.component';

describe('OnboardingLocaionStep1Component', () => {
  let component: OnboardingExerciseStep1Component;
  let fixture: ComponentFixture<OnboardingExerciseStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingExerciseStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingExerciseStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
