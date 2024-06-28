import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const rolebasedloadGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const hasAccess = localStorage.getItem('hasAccess');
  const parsedHasAccess = hasAccess ? JSON.parse(hasAccess) : undefined;
  if (parsedHasAccess) {
    return true;
  } else {
    // Redirect to some other page or show an alert
    router.navigateByUrl('/access-denied')
    return false;
  }
};
