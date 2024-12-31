import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlanStep14Component } from './choose-plan-step14.component';

describe('ChoosePlanStep14Component', () => {
  let component: ChoosePlanStep14Component;
  let fixture: ComponentFixture<ChoosePlanStep14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePlanStep14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosePlanStep14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
