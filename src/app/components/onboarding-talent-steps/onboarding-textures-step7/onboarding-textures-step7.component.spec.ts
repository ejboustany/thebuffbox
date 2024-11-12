import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingTexturesStep7Component } from './onboarding-textures-step7.component';

describe('OnboardingTexturesStep7Component', () => {
  let component: OnboardingTexturesStep7Component;
  let fixture: ComponentFixture<OnboardingTexturesStep7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingTexturesStep7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingTexturesStep7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
