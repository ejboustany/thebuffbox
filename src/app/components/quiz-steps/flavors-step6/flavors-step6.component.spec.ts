import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingFlavorsStep6Component } from './flavors-step6.component';

describe('OnboardingFlavorsStep6Component', () => {
  let component: OnboardingFlavorsStep6Component;
  let fixture: ComponentFixture<OnboardingFlavorsStep6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingFlavorsStep6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingFlavorsStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
