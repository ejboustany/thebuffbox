import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.css'
})
export class AppMenuComponent implements OnInit {
  isDropdownOpen = false;

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

  // trackSectionVisibility(): void {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       this.isHowItWorksActive = entry.isIntersecting;
  //     },
  //     { threshold: 0.5 } // Adjust threshold for when the section is considered visible
  //   );

  //   const section = document.getElementById('how-it-works');
  //   if (section) {
  //     observer.observe(section);
  //   }
  // }
}
