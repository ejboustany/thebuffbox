import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTrackerComponent } from './delivery-tracker.component';

describe('DeliveryTrackerComponent', () => {
  let component: DeliveryTrackerComponent;
  let fixture: ComponentFixture<DeliveryTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
