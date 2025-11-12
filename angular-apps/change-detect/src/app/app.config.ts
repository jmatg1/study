import {
    ApplicationConfig,
    provideZoneChangeDetection, provideZonelessChangeDetection
} from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { provideRouter, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { OneComponent } from "./features/one/one.component";
import { authGuard } from "./auth.guard";
import { SixComponent } from "./features/six/six.component";
import { deactGuard } from "./deact.guard";

const routes: Routes = [
    { path: 'dashboard', component: SixComponent, canActivate: [authGuard], canDeactivate: [deactGuard] },
    { path: '**', redirectTo: '' },
];

export const appConfig: ApplicationConfig = {
  providers: [
      provideZonelessChangeDetection(),
      // provideZoneChangeDetection({ eventCoalescing: true }),
      provideHttpClient(withInterceptorsFromDi()),
      CommonModule,
      provideRouter(routes)
  ],
};
