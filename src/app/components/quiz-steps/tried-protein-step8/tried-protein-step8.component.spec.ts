import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingTriedProteinStep8Component } from './tried-protein-step8.component';

describe('OnboardingTriedProteinStep8Component', () => {
  let component: OnboardingTriedProteinStep8Component;
  let fixture: ComponentFixture<OnboardingTriedProteinStep8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingTriedProteinStep8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardingTriedProteinStep8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
