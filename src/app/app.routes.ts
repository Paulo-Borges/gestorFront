import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('../pages/home/home').then((m) => m.Home) },
  { path: 'ordem', loadComponent: () => import('../pages/ordem/ordem').then((m) => m.Ordem) },
  {
    path: 'categoria',
    loadComponent: () => import('../pages/categoria/categoria').then((m) => m.Categoria),
  },
  { path: '**', redirectTo: 'home' },
];
