import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTrackerComponent } from './subscription-tracker.component';

describe('SubscriptionTrackerComponent', () => {
  let component: SubscriptionTrackerComponent;
  let fixture: ComponentFixture<SubscriptionTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
