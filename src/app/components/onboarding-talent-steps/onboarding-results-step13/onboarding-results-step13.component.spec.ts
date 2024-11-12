import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingResultsStep13Component } from './onboarding-results-step13.component';

describe('OnboardingResultsStep13Component', () => {
  let component: OnboardingResultsStep13Component;
  let fixture: ComponentFixture<OnboardingResultsStep13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingResultsStep13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingResultsStep13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
