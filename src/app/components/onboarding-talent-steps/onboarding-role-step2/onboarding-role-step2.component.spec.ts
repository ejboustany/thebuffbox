import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingRoleStep2Component } from './onboarding-role-step2.component';

describe('OnboardingStep2Component', () => {
  let component: OnboardingRoleStep2Component;
  let fixture: ComponentFixture<OnboardingRoleStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingRoleStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingRoleStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
