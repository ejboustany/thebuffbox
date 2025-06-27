import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxReviewComponent } from './box-review.component';

describe('BoxReviewComponent', () => {
  let component: BoxReviewComponent;
  let fixture: ComponentFixture<BoxReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
