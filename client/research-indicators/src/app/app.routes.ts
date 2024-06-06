import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/platform/platform.component'),
    children: []
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/platform/platform.component')
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];
