import { Address } from './address.model';
import { Base } from './base.model';
import {Image} from './image.model'

export class Identity extends Base   {
    firstName: string;
    lastName: string;
    emailAddress: string;
    profilePicture: Image;
    about: string;
    address: Address;
    permissions: any;
}