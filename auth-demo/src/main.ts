import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app';
import { routes } from './app.routes.';
import { AuthInterceptor } from './auth-interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([() => new AuthInterceptor()])),
    importProvidersFrom(FormsModule)
  ]
});
