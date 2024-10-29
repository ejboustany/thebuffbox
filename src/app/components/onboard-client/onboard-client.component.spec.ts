import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardClientComponent } from './onboard-client.component';

describe('OnboardClientComponent', () => {
  let component: OnboardClientComponent;
  let fixture: ComponentFixture<OnboardClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
