import { Component, Input, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';

@Component({
  selector: 'app-flavors-step6',
  templateUrl: './flavors-step6.component.html',
  styleUrl: './flavors-step6.component.css'
})
export class OnboardingFlavorsStep6Component implements OnInit {
  @Input() quiz: any;
  flavors:any;
  @Input() progress: string = "7%";
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
