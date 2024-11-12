import { Component, Input, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-onboarding-flavors-step6',
  templateUrl: './onboarding-flavors-step6.component.html',
  styleUrl: './onboarding-flavors-step6.component.css'
})
export class OnboardingFlavorsStep6Component implements OnInit {
  @Input() quiz: any;
  flavors:any;
  constructor(private typesServeice: TypesService) { }
  ngOnInit(): void {
    this.getFlavors();
  }
  
  getFlavors() {
    return this.typesServeice.flavors().subscribe((res: any) => {
      this.flavors = res;
    });
  }
}
