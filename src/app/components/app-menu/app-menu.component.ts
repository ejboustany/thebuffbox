import { Component } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.css'
})
export class AppMenuComponent {
  isMenuOpen: boolean = false; // Initial state of the menu

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle the menu state
  }
}
