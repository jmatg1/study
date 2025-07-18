import {
    ApplicationConfig,
    provideExperimentalZonelessChangeDetection,
    provideZoneChangeDetection
} from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [
      // provideExperimentalZonelessChangeDetection(),
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideHttpClient(withInterceptorsFromDi()),
      CommonModule,
  ],
};
