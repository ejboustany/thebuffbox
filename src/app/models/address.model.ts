import { Base } from "./base.model";

export class Address extends Base   {
    countryText: string;
    street: string;
    city: string;
    country: number;
    state: string;
    postalCode: string;
}