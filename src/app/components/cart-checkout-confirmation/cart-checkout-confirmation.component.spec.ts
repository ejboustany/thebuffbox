import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCheckoutConfirmationComponent } from './cart-checkout-confirmation.component';

describe('CartCheckoutConfirmationComponent', () => {
  let component: CartCheckoutConfirmationComponent;
  let fixture: ComponentFixture<CartCheckoutConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartCheckoutConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartCheckoutConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
