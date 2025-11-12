### CanActivate 
Охранник `CanActivate` определяет, может ли пользователь получить доступ к маршруту. Чаще всего он используется для `аутентификации` и `авторизации`.

```typescript
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
```
### CanDeactivate
Защитник `CanDeactivate` определяет, может ли пользователь покинуть маршрут. Распространенный сценарий — запрет на навигацию по несохраненным формам.
```typescript
import { CanDeactivateFn } from '@angular/router';

export const deactGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
```
### CanActivateChild
Защита `CanActivateChild` определяет, может ли пользователь получить доступ к дочерним маршрутам определенного родительского маршрута. 

```typescript
import { CanActivateChildFn } from '@angular/router';

export const childGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
```
### CanMatch
Функция Guard `CanMatch` определяет, можно ли сопоставить маршрут во время сопоставления пути. В отличие от других функций Guard, отклонение пропускает проверку, позволяя попробовать другие соответствующие маршруты, а не блокировать навигацию полностью. Это может быть полезно для флагов функций, A/B-тестирования или условной загрузки маршрутов.

```typescript
export const featureToggleGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const featureService = inject(FeatureService);
  return featureService.isFeatureEnabled('newDashboard');
};
```
``` typescript
const routes: Routes = [
    // Basic CanActivate - requires authentication
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    // Multiple CanActivate guards - requires authentication AND admin role
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [authGuard, adminGuard]
    },
    // CanActivate + CanDeactivate - protected route with unsaved changes check
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard],
        canDeactivate: [canDeactivateGuard]
    },
    // CanActivateChild - protects all child routes
    {
        path: 'users', // /user - NOT protected
        canActivateChild: [authGuard],
        children: [
            // /users/list - PROTECTED
            { path: 'list', component: UserListComponent },
            // /users/detail/:id - PROTECTED
            { path: 'detail/:id', component: UserDetailComponent }
        ]
    },
    // CanMatch - conditionally matches route based on feature flag
    {
        path: 'beta-feature',
        component: BetaFeatureComponent,
        canMatch: [featureToggleGuard]
    },
    // Fallback route if beta feature is disabled
    {
        path: 'beta-feature',
        component: ComingSoonComponent
    }
];
```
