import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardTalentThankyouComponent } from './onboard-talent-thankyou.component';

describe('OnboardTalentThankyouComponent', () => {
  let component: OnboardTalentThankyouComponent;
  let fixture: ComponentFixture<OnboardTalentThankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardTalentThankyouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardTalentThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
