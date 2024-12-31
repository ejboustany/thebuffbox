import { Component, Input, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-brands-dislike-step11',
  templateUrl: './brands-dislike-step11.component.html',
  styleUrl: './brands-dislike-step11.component.css'
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
