import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingFollowDietStep4Component } from './follow-diet-step4.component';

describe('OnboardingFollowDietStep4Component', () => {
  let component: OnboardingFollowDietStep4Component;
  let fixture: ComponentFixture<OnboardingFollowDietStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingFollowDietStep4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingFollowDietStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
