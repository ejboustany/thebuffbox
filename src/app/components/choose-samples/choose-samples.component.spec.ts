import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSamplesComponent } from './choose-samples.component';

describe('ChooseSamplesComponent', () => {
  let component: ChooseSamplesComponent;
  let fixture: ComponentFixture<ChooseSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseSamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
