import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choose-plan-step14',
  templateUrl: './choose-plan-step14.component.html',
  styleUrl: './choose-plan-step14.component.css'
})
export class ChoosePlanStep14Component implements OnInit{
  orderId: any;

  constructor( 
      private route: ActivatedRoute){

      }
  // Define the variable to track if the radio button is selected
  isSelected: boolean = false;

  // Method to be triggered when the radio button is clicked
  selectTheBuffbox() {
    // You can perform additional actions when the radio button is clicked
   this.isSelected = true;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderId = +params['orderId'];
   
    });
  
  }
}
