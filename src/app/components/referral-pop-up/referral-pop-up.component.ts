import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-referral-pop-up',
  templateUrl: './referral-pop-up.component.html',
  styleUrl: './referral-pop-up.component.css'
})
export class ReferralPopUpComponent {
  referralLink: string = ''; // You can replace this with a dynamic link
  isLinkCopied: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ReferralPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clipboard: Clipboard, private snackBar: MatSnackBar
  ) {
    this.referralLink = "https://thebuffbox.com/take-quiz/1?referralCode=" + this.data.referralCode;
  }

  close(): void {
    this.dialogRef.close();
  }

  copyReferralLink(): void {
    this.clipboard.copy(this.referralLink);
    this.isLinkCopied = true;

  }
}
