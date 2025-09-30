import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';

export const appConfig = {
  providers: [
    provideHttpClient(withInterceptors([() => new AuthInterceptor()])),
  ],
};
