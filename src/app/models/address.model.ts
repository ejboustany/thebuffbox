import { Base } from "./base.model";

export class Address extends Base   {
    countryText: string;
    street1: string;
    street2: string;
    city: string;
    country: number;
    state: string;
    postalCode: string;
}