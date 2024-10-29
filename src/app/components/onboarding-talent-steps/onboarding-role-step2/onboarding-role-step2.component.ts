import { Component, Input, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-onboarding-role-step2',
  templateUrl: './onboarding-role-step2.component.html',
  styleUrls: ['./onboarding-role-step2.component.css']
})
export class OnboardingRoleStep2Component {
  dietaryPreferences : any;
  dietaryRestrictions:any;
  flavors:any;
  @Input() quiz: any;
  constructor(private typesServeice: TypesService) { }

  getFitnessGoals() {
    return this.typesServeice.dietaryPreferences().subscribe((res: any) => {
      this.dietaryPreferences = res;
    });
  }

  getRestrictions() {
    return this.typesServeice.restrictions().subscribe((res: any) => {
      this.dietaryRestrictions = res;
    });
  }

  getFlavors() {
    return this.typesServeice.flavors().subscribe((res: any) => {
      this.flavors = res;
    });
  }

  ngOnInit(): void {
    this.getFitnessGoals();
    this.getRestrictions();
    this.getFlavors();
  }
}
