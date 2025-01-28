import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
})
export class AppComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
  title = 'Organisation UI';
  links: any[] = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Roles',
      link: '/roles',
    },
    {
      name: 'Clients',
      link: '/clients',
    },
    {
      name: 'Projects',
      link: '/projects',
    },
    {
      name: 'Employees',
      link: '/employees',
    },
  ];
}
