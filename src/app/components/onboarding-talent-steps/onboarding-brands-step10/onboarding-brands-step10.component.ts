import { Component, Input, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-onboarding-brands-step10',
  templateUrl: './onboarding-brands-step10.component.html',
  styleUrl: './onboarding-brands-step10.component.css'
})
export class OnboardingBrandsStep10Component implements OnInit {
  @Input() quiz: any;
  proteinBrands: any;

  constructor(private typesServeice: TypesService) { }
  
  ngOnInit(): void {
    this.getProteinBrands();
  }

  getProteinBrands() {
    return this.typesServeice.proteinBrands().subscribe((res: any) => {
      this.proteinBrands = res;
    });
  }
}
