import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { routes } from './app.routes';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, NotFoundComponent], // Non standalone (Components, Directives, and Pipes)
  bootstrap: [AppComponent], // Root Component
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterLink,
    BrowserAnimationsModule,
    RouterOutlet,
    MaterialModule,
  ], // Other standalone modules which exports components, directives, and pipes
})
export class AppModule {}
