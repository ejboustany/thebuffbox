import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrl: './review-item.component.css'
})
export class ReviewItemComponent {
  reviewText: string = '';
  privacyAccepted: boolean = false;
  selectedRating: number = 4; // Default to 4 stars as shown in image

  // Product data from the dialog
  productData: any = {};

  constructor(
    public dialogRef: MatDialogRef<ReviewItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar, private productService: ProductService
  ) {

    console.log(this.data)
    this.productData = {
      name: this.data?.productTitle || 'Sweat Ethic',
      type: this.data?.brandName || '',
      flavor: this.data?.flavorSubCategoryText || 'DUTCH CHOCOLATE',
      image: this.data?.sampleImage.originalPath || 'assets/product-image.jpg',
      id: this.data?.productId
    };
  }

  close(): void {
    this.dialogRef.close();
  }


  get isFormValid(): boolean {
    return this.reviewText.length >= 25 && this.privacyAccepted;
  }

  get characterCount(): number {
    return this.reviewText?.length || 0;
  }

  submitReview(): void {
    if (!this.isFormValid) {
      if (this.reviewText.length < 25) {
        this.snackBar.open('Review must be at least 25 characters long', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
        return;
      }

      if (!this.privacyAccepted) {
        this.snackBar.open('Please accept the privacy policy', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
        return;
      }
    }

    const reviewData = {
      rating: this.rating,
      description: this.reviewText,
      agreementConfirmation: this.privacyAccepted,
      productId: this.productData.id
    };

    this.productService.addReview(reviewData).subscribe((res: any) => {
      this.snackBar.open('Review submitted successfully!', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });
      this.dialogRef.close(reviewData);
    });

  }

  onReviewTextChange(): void {
    // Optional: Handle real-time validation or character counting
    if (this.reviewText.length > 500) {
      this.reviewText = this.reviewText.substring(0, 500);
    }
  }

  ////
  rating: number = 0; // Current rating (1-5)
  maxRating: number = 5; // Maximum rating

  // Method to set rating when star is clicked
  setRating(star: number): void {
    this.rating = star;
  }

  // Method to check if a star should be filled
  isStarFilled(star: number): boolean {
    return star <= this.rating;
  }

  // Method for hover effect (optional)
  hoverRating: number = 0;

  onStarHover(star: number): void {
    this.hoverRating = star;
  }

  onStarLeave(): void {
    this.hoverRating = 0;
  }

  // Get the current display rating (hover takes priority)
  getDisplayRating(star: number): boolean {
    const currentRating = this.hoverRating || this.rating;
    return star <= currentRating;
  }
}
