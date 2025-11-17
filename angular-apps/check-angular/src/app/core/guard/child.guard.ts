import { CanActivateChildFn } from '@angular/router';

export const childGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
