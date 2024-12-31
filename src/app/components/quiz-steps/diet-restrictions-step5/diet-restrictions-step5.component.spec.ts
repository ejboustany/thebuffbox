import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingDietRestrictionsStep5Component } from './diet-restrictions-step5.component';

describe('OnboardingStep5Component', () => {
  let component: OnboardingDietRestrictionsStep5Component;
  let fixture: ComponentFixture<OnboardingDietRestrictionsStep5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingDietRestrictionsStep5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingDietRestrictionsStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
