import { Base } from "./base.model";
import { Identity } from "./identity.model";

export class Quiz extends Base   {
    exerciseFrequency: any;
    exerciseTypes: any[] = [];
    fitnessGoals: any[] = [];
    lifestylePerformanceGoals: any[] = [];
    dietaryPreferences: any[] = [];
    dietaryRestrictions: any[] = [];
    flavors: any[] = [];
    textureDislikes: string;
    usedProteinBefore: boolean | null;
    proteinMixes: any[] = [];
    brandUsages: any[] = [];
    dislikedBrands: string;
    profileInfo: Identity;
    orderId: number;
}