import { Identity } from "./identity.model";

export class AuthenticationInfo {
    identity: Identity;
    permissions: any;
    subscription: any;
    callCredits: number;
    referralCode: string;
    uncompletedCheckoutOrderId: number;
  }