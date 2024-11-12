import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoxImgButtonComponent } from './checkox-img-button.component';

describe('CheckoxImgButtonComponent', () => {
  let component: CheckoxImgButtonComponent;
  let fixture: ComponentFixture<CheckoxImgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoxImgButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoxImgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
