import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingRegisterStep12Component } from './onboarding-register-step12.component';

describe('OnboardingRegisterStep12Component', () => {
  let component: OnboardingRegisterStep12Component;
  let fixture: ComponentFixture<OnboardingRegisterStep12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingRegisterStep12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingRegisterStep12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
