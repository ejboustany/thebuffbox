import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralPopUpComponent } from './referral-pop-up.component';

describe('ReferralPopUpComponent', () => {
  let component: ReferralPopUpComponent;
  let fixture: ComponentFixture<ReferralPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferralPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferralPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
