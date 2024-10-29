import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingLocaionStep1Component } from './onboarding-location-step1.component';

describe('OnboardingLocaionStep1Component', () => {
  let component: OnboardingLocaionStep1Component;
  let fixture: ComponentFixture<OnboardingLocaionStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingLocaionStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingLocaionStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
