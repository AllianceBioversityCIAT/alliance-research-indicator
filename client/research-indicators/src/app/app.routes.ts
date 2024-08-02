import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/platform/platform.component'),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/platform/pages/home/home.component')
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/platform/pages/about/about.component')
      },
      {
        path: 'notifications',
        loadComponent: () => import('./pages/platform/pages/notifications/notifications.component')
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/platform/pages/settings/settings.component')
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/platform/pages/profile/profile.component')
      }
    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/platform/platform.component')
  },
  {
    path: 'fields',
    loadComponent: () => import('./pages/dynamic-fields/dynamic-fields.component')
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];
