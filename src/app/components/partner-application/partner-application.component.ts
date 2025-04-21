import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-partner-application',
  templateUrl: './partner-application.component.html',
  styleUrl: './partner-application.component.css'
})
export class PartnerApplicationComponent implements OnInit {
  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    instagram: '', // Changed from age to instagram based on form fields
    tiktok: '',    // Changed from shippingAddress.postalCode to tiktok based on form fields
  };

  errors: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    instagram: '',
    tiktok: ''
  };

  formSubmitted = false;

  constructor(private accountSercice: AccountService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // Initialize user object
    this.resetForm();
  }

  resetForm(): void {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      instagram: '',
      tiktok: ''
    };
    this.clearErrors();
  }

  clearErrors(): void {
    this.errors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      instagram: '',
      tiktok: ''
    };
  }

  validateForm(): boolean {
    let isValid = true;
    this.clearErrors();

    // First Name validation
    if (!this.user.firstName || this.user.firstName.trim() === '') {
      this.errors.firstName = 'First name is required';
      isValid = false;
    }

    // Last Name validation
    if (!this.user.lastName || this.user.lastName.trim() === '') {
      this.errors.lastName = 'Last name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.user.email || this.user.email.trim() === '') {
      this.errors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(this.user.email)) {
      this.errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone number validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!this.user.phone || this.user.phone.trim() === '') {
      this.errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(this.user.phone)) {
      this.errors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Instagram validation
    // if (!this.user.instagram || this.user.instagram.trim() === '') {
    //   this.errors.instagram = 'Instagram handle is required';
    //   isValid = false;
    // }

    // // TikTok validation
    // if (!this.user.tiktok || this.user.tiktok.trim() === '') {
    //   this.errors.tiktok = 'TikTok handle is required';
    //   isValid = false;
    // }

    return isValid;
  }

  submitRequest(): void {
    this.formSubmitted = true;

    if (this.validateForm()) {
      // Here you would typically call a service to send the data to your backend
      // Success message or redirect
     this.accountSercice.saveInfluencerForm(this.user).subscribe((res: any) => {
        this.snackBar.open("Form submitted!", "dismiss", {
          panelClass: "success",
          politeness: "polite",
          duration: 4000,
          horizontalPosition: 'right'
        });
        this.resetForm();
      });

    } else {
      console.log('Form has errors', this.errors);
    }
  }

}