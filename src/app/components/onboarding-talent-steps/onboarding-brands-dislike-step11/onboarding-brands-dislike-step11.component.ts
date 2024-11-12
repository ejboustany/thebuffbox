import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding-brands-dislike-step11',
  templateUrl: './onboarding-brands-dislike-step11.component.html',
  styleUrl: './onboarding-brands-dislike-step11.component.css'
})
export class OnboardingBrandsDislikeStep11Component implements OnInit {
  ngOnInit(): void {
    if(this.quiz.dislikedBrands != "" && this.quiz.dislikedBrands != null){
      this.chips = this.quiz.dislikedBrands.split(",");
    }
  }
  @Input() quiz: any;

  searchTerm: string = '';
  chips: string[] = [];

  addChip(): void {
    if (this.searchTerm.trim()) {
      this.chips.push(this.searchTerm.trim());
      this.searchTerm = ''; // Clear input

      this.quiz.dislikedBrands = this.getChipsAsString();
    }
  }

  removeChip(index: number): void {
    this.chips.splice(index, 1);
  }

  getChipsAsString(): string {
    return this.chips.join(',');
  }
}
