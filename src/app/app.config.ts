import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideLottieOptions } from 'ngx-lottie';
import { httpInterceptor } from './common/Interceptor/http.interceptor';


export const appConfig: ApplicationConfig = {


  providers: [
      provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',

      })
      ), 
      provideHttpClient(),
      provideAnimationsAsync(),
      provideLottieOptions({
        player: () => import('lottie-web'),
      }),
      provideHttpClient(withInterceptors([httpInterceptor])),  
  ],
};
