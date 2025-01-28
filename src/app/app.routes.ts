import { Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

import { ClientsComponent } from './Pages/clients/clients.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { EmployeesComponent } from './Pages/employees/employees.component';
import { RolesComponent } from './Pages/roles/roles.component';
import { rolesResolver } from './Resolver/Roles/roles.resolver';
import { clientsResolver } from './Resolver/Clients/clients.resolver';
import { employeesResolver } from './Resolver/Employees/employees.resolver';
import { projectsResolver } from './Resolver/Projects/projects.resolver';

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
    resolve: {
      clients: clientsResolver,
    },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    resolve: {
      clients: clientsResolver,
      employees: employeesResolver,
      projects: projectsResolver,
    },
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    resolve: {
      employees: employeesResolver,
      roles: rolesResolver,
    },
  },
  {
    path: 'roles',
    component: RolesComponent,
    resolve: {
      roles: rolesResolver,
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
