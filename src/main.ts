import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/router/index';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

// routing with standalone
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(),
  ],
});