import { Component, Input, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-onboarding-brands-dislike-step11',
  templateUrl: './onboarding-brands-dislike-step11.component.html',
  styleUrl: './onboarding-brands-dislike-step11.component.css'
})
export class OnboardingBrandsDislikeStep11Component implements OnInit {
  proteinBrands: any;
  @Input() quiz: any;
  @Input() progress: string = "7%";
  constructor(private typesServeice: TypesService) {

  }

  ngOnInit(): void {
    this.getProteinBrands();
  }

  getProteinBrands() {
    return this.typesServeice.proteinBrands().subscribe((res: any) => {
      this.proteinBrands = res;
    });
  }
}
