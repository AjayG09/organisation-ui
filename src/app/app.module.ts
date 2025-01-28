import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { routes } from './app.routes';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import {
  EntityDataModule,
  EntityDefinitionService,
  HttpUrlGenerator,
} from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { entityConfig } from './entity-metadata';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppHttpUrlGenerator } from './Services/custom-http-url-generator.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RolesComponent } from './Pages/roles/roles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRoleComponent } from './Pages/roles/add-role/add-role.component';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './Pages/clients/clients.component';
import { AddClientComponent } from './Pages/clients/add-client/add-client.component';
import { AddProjectComponent } from './Pages/projects/add-project/add-project.component';
import { AddEmployeeComponent } from './Pages/employees/add-employee/add-employee.component';
import { EmployeesComponent } from './Pages/employees/employees.component';
import { ProjectsComponent } from './Pages/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    RolesComponent,
    AddRoleComponent,
    ClientsComponent,
    AddClientComponent,
    AddEmployeeComponent,
    EmployeesComponent,
    ProjectsComponent,
    AddProjectComponent,
  ], // Non standalone (Components, Directives, and Pipes)
  bootstrap: [AppComponent], // Root Component
  imports: [
    CommonModule,
    BrowserModule,
    RouterLink,
    BrowserAnimationsModule,
    RouterOutlet,
    MaterialModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    RouterModule.forRoot(routes),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ReactiveFormsModule,
  ], // Standalone (Modules)
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    { provide: HttpUrlGenerator, useClass: AppHttpUrlGenerator },
  ], // Services
})
export class AppModule {
  constructor(private eds: EntityDefinitionService) {
    eds.registerMetadataMap(entityConfig.entityMetadata);
  }
}
