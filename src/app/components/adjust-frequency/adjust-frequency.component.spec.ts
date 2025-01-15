import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustFrequencyComponent } from './adjust-frequency.component';

describe('AdjustFrequencyComponent', () => {
  let component: AdjustFrequencyComponent;
  let fixture: ComponentFixture<AdjustFrequencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjustFrequencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdjustFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
