import { Component, Input, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-brands-step10',
  templateUrl: './brands-step10.component.html',
  styleUrl: './brands-step10.component.css'
})
export class OnboardingBrandsStep10Component implements OnInit {
  @Input() quiz: any;
  proteinBrands: any;
  @Input() progress: string = "7%";
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
