import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsLearnMoreComponent } from './subscriptions-learn-more.component';

describe('SubscriptionsLearnMoreComponent', () => {
  let component: SubscriptionsLearnMoreComponent;
  let fixture: ComponentFixture<SubscriptionsLearnMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionsLearnMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionsLearnMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
