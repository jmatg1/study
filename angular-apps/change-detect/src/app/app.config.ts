import {
    ApplicationConfig,
    provideZoneChangeDetection, provideZonelessChangeDetection
} from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [
      provideZonelessChangeDetection(),
      // provideZoneChangeDetection({ eventCoalescing: true }),
      provideHttpClient(withInterceptorsFromDi()),
      CommonModule,
  ],
};
