import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  console.log("Login Gaurd route::::::", route);
  const router = inject(Router);

  const user = localStorage.getItem('user');
  const parsedUser = user ? JSON.parse(user) : null;

  if (parsedUser) {
    router.navigateByUrl('/dashboard');
    return false;
  } else {
    return true;
  }

};
