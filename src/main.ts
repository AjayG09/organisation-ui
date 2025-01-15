import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';

// Bootstrap the application with the app module and app config
platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [{ provide: 'APP_CONFIG', useValue: appConfig }],
});
