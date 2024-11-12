import { Component, Input, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-onboarding-protein-mix-step9',
  templateUrl: './onboarding-protein-mix-step9.component.html',
  styleUrl: './onboarding-protein-mix-step9.component.css'
})
export class OnboardingProteinMixStep9Component implements OnInit {
  ngOnInit(): void {
    this.getProteinMixes();
  }
  @Input() quiz: any;
  proteinMixes: any;

  constructor(private typesServeice: TypesService) { }

  getProteinMixes() {
    return this.typesServeice.proteinMixes().subscribe((res: any) => {
      this.proteinMixes = res;
    });
  }
}
