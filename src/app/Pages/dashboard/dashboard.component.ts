import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false,
})
export class DashboardComponent {
  title: string = 'Organisation UI';
  links: any[] = [
    { name: 'Roles', link: 'https://angular.dev' },
    {
      name: 'Clients',
      link: 'https://angular.dev/tutorials',
    },
    {
      name: 'Projects',
      link: 'https://angular.dev/tools/language-service',
    },
    {
      name: 'Employees',
      link: 'https://angular.dev/tools/devtools',
    },
  ];
}
