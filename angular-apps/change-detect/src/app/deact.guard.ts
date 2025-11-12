import { CanDeactivateFn } from '@angular/router';

export const deactGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
    debugger
    alert()
  return true;
};
