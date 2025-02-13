import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildYourBoxComponent } from './build-your-box.component';

describe('BuildYourBoxComponent', () => {
  let component: BuildYourBoxComponent;
  let fixture: ComponentFixture<BuildYourBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildYourBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildYourBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
