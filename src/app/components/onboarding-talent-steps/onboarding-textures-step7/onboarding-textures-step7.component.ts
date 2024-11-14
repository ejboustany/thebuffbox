import { Component, Input } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-onboarding-textures-step7',
  templateUrl: './onboarding-textures-step7.component.html',
  styleUrl: './onboarding-textures-step7.component.css'
})
export class OnboardingTexturesStep7Component {
  ngOnInit(): void {
    this.getTextures();
  }

  @Input() progress: string = "7%";
  @Input() quiz: any;
  textures: any;

  constructor(private typesServeice: TypesService) { }

  getTextures() {
    return this.typesServeice.textures().subscribe((res: any) => {
      this.textures = res;
    });
  }
}
