import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { APICallService } from './api-call.service';

@Injectable({
    providedIn: 'root'
})
export class TypesService {
    constructor(private apiCallService: APICallService) { }

    countries() {
        const url = environment.api + "/Types/Countries";
        return this.apiCallService.get(url);
    }

    exerciseTypes() {
        const url = environment.api + "/Types/ExerciseTypes";
        return this.apiCallService.get(url);
      }
    
      exerciseFrequencies() {
        const url = environment.api + "/Types/ExerciseFrequencies";
        return this.apiCallService.get(url);
      }
    
      fitnessGoals() {
        const url = environment.api + "/Types/FitnessGoals";
        return this.apiCallService.get(url);
      }
    
      lifestylePerformanceGoals() {
        const url = environment.api + "/Types/LifestylePerformanceGoals";
        return this.apiCallService.get(url);
      }
    
      dietaryPreferences() {
        const url = environment.api + "/Types/DietaryPreferences";
        return this.apiCallService.get(url);
      }
    
      restrictions() {
        const url = environment.api + "/Types/Restrictions";
        return this.apiCallService.get(url);
      }
    
      flavors() {
        const url = environment.api + "/Types/Flavors";
        return this.apiCallService.get(url);
      }
    
      proteinMixes() {
        const url = environment.api + "/Types/ProteinMixes";
        return this.apiCallService.get(url);
      }
    
      proteinBrands() {
        const url = environment.api + "/Types/ProteinBrands";
        return this.apiCallService.get(url);
      }

}