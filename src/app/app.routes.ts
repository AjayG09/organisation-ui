import { Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

import { ClientsComponent } from './Pages/clients/clients.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { EmployeesComponent } from './Pages/employees/employees.component';
import { RolesComponent } from './Pages/roles/roles.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'roles',
    component: RolesComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
