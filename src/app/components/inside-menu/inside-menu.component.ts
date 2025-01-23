import { Component, Input, NgZone, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { AuthenticationInfo } from 'src/app/models/authenticationInfo.model';
import { Identity } from 'src/app/models/identity.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-inside-menu',
  templateUrl: './inside-menu.component.html',
  styleUrl: './inside-menu.component.css'
})
export class InsideMenuComponent  implements OnInit {
  isDropdownOpen = false;
  @Input() showBottomMenu: boolean = true;
  @Input() allowClosing: boolean = false;

  constructor(private router: Router){

  }
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isHowItWorksActive = false;

  ngOnInit(): void {
    // this.trackSectionVisibility();
  }

  scrollToSection(id: string): void {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.isHowItWorksActive = true;
    }
  }
  isActive(route: string): boolean {
    return this.router.url === route;
  }
  
  

}