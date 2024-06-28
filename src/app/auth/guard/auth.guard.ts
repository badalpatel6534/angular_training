import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = localStorage.getItem('user');
  if (user) {
    return true; // User is authenticated
  } else {
    router.navigateByUrl('/login'); // Redirect to login if not authenticated
    return false;
  }
};

