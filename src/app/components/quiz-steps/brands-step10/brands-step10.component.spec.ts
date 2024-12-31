import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingBrandsStep10Component } from './brands-step10.component';

describe('OnboardingBrandsStep10Component', () => {
  let component: OnboardingBrandsStep10Component;
  let fixture: ComponentFixture<OnboardingBrandsStep10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingBrandsStep10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingBrandsStep10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
