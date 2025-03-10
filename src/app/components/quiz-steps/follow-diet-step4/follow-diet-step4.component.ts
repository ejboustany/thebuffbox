import { Component, Input } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-follow-diet-step4',
  templateUrl: './follow-diet-step4.component.html',
  styleUrls: ['./follow-diet-step4.component.css']
})
export class OnboardingFollowDietStep4Component {
  @Input() quiz: any;
  dietaryPreferences : any;
  @Input() progress: string = "7%";
  ageRange: number[] = Array.from({ length: 100 }, (_, i) => i + 1); // Ages 1 to 100
  constructor(private typesServeice: TypesService) { }

  getDietaryPreferences() {
    return this.typesServeice.dietaryPreferences().subscribe((res: any) => {
      this.dietaryPreferences = res;
    });
  }

  ngOnInit(): void {
    this.getDietaryPreferences();
  }
}
