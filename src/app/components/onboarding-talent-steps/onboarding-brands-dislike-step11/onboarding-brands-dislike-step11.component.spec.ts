import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingBrandsDislikeStep11Component } from './onboarding-brands-dislike-step11.component';

describe('OnboardingBrandsDislikeStep11Component', () => {
  let component: OnboardingBrandsDislikeStep11Component;
  let fixture: ComponentFixture<OnboardingBrandsDislikeStep11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingBrandsDislikeStep11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingBrandsDislikeStep11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
