import { Routes, CanLoad } from '@angular/router';
import { loginAuthGuard } from './auth/guard/login-auth.guard';
import { authGuard } from './auth/guard/auth.guard';
import {  componentArchitectureResolver, componentArchitectureWithIdResolver } from './resolvers/component-architecture.resolver';
import { candeactiveGuard } from './auth/guard/candeactive.guard';
import { rolebasedloadGuard } from './auth/guard/rolebasedload.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then((c) => c.LoginComponent),
    canActivate: [loginAuthGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then((c) => c.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: 'lifecycle',
    loadComponent: () => import('./components/lifecycle/lifecycle.component').then((c) => c.LifecycleComponent),
    canActivate: [authGuard]
  },
  {
    path: 'routing',
    loadComponent: () => import('./components/routing/routing.component').then((c) => c.RoutingComponent),
    canActivate: [authGuard]
  },
  {
    path: 'component-architecture/:id',
    loadComponent: () => import('./components/component-architecture/component-architecture').then((c) => c.ComponentArchitectureComponent),
    canActivate: [authGuard],
    resolve: { products: componentArchitectureWithIdResolver }
  },
  {
    path: 'component-architecture',
    loadComponent: () => import('./components/component-architecture/component-architecture').then((c) => c.ComponentArchitectureComponent),
    canActivate: [authGuard],
    resolve: { products: componentArchitectureResolver }
  },
  {
    path: 'forms',
    loadComponent: () => import('./components/address-form/address-form.component').then((c) => c.AddressFormComponent),
    canActivate: [authGuard],
    canDeactivate: [candeactiveGuard]
  },
  {
    path: 'crud-from',
    loadComponent: () => import('./components/user-list/user-list.component').then((c) => c.UserListComponent),
    canActivate: [authGuard]
  },
  {
    path: 'content-projection',
    loadComponent: () => import('./components/content-projection/content-projection.component').then((c) => c.ContentProjectionComponent),
    canActivate: [authGuard]
  },
  {
    path: 'pipe-directive',
    loadComponent: () => import('./components/pipe-directive/pipe-directive.component').then((c) => c.PipeDirectiveComponent),
    canActivate: [authGuard],
    canMatch: [rolebasedloadGuard]
  },
  {
    path: 'access-denied',
    loadComponent: () => import('./components/access-denied/access-denied.component').then((c) => c.AccessDeniedComponent),
    canActivate: [authGuard]
  },
  {
    path: '**',
    loadComponent: () => import('./components/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent),
  },
];
