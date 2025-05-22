import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { materialImports } from "./shared/material-imports/material-imports";
import { HttpClientService } from "./core/http-client";
import { MatButtonModule } from "@angular/material/button";

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      // importProvidersFrom(...materialImports),
      provideHttpClient(withInterceptorsFromDi()),
      // importProvidersFrom(RouterModule.forRoot([
      //         {
      //         path: '',
      //         redirectTo: 'list',
      //         pathMatch: 'full',
      //     }
      // ]))
      HttpClientService,
      // ...materialImports
      MatButtonModule
  ],
};
