import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-onboarding-skills-step3',
  templateUrl: './onboarding-skills-step3.component.html',
  styleUrls: ['./onboarding-skills-step3.component.css']
})
export class OnboardingSkillsStep3Component {
  constructor(private typesServeice: TypesService) { }
  @Input() quiz: any;
  proteinMixes: any;
  proteinBrands: any;
  ngOnInit(): void {
    this.getProteinMixes();
    this.getProteinBrands();
  }

  getProteinMixes() {
    return this.typesServeice.proteinMixes().subscribe((res: any) => {
      this.proteinMixes = res;
    });
  }

  getProteinBrands() {
    return this.typesServeice.proteinBrands().subscribe((res: any) => {
      this.proteinBrands = res;
    });
  }

  onChange(usedProteinBefore: boolean){
    this.quiz.usedProteinBefore = usedProteinBefore;
  }
}
