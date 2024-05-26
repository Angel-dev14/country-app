import {
  ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { of } from 'rxjs';

export const AuthGuard: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
  const authService = inject(AuthService);
  if (authService.isLoggedIn()) {
    return of(true);
  }
  const router = inject(Router);
  router.navigate(['login']);
  return of(false);
};
