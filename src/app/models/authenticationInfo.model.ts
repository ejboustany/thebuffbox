import { Identity } from "./identity.model";

export class AuthenticationInfo {
    identity: Identity;
    permissions: any;
    subscriptions: any;
    callCredits: number;
    referralCode: string;
  }