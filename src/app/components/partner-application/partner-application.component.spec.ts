import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerApplicationComponent } from './partner-application.component';

describe('PartnerApplicationComponent', () => {
  let component: PartnerApplicationComponent;
  let fixture: ComponentFixture<PartnerApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnerApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
