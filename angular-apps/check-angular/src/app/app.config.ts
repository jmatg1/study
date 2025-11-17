import {
    ApplicationConfig,
    provideZoneChangeDetection, provideZonelessChangeDetection
} from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { provideRouter, Routes } from "@angular/router";
import { ViewQueriesComponent } from "./features/view-queries/view-queries.component";
import { ControlFlowComponent } from "./features/control-flow/control-flow.component";

export const routes: Routes = [
    { path: 'view-queries', component: ViewQueriesComponent },
    { path: 'control-flow', component: ControlFlowComponent },
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
