import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('../pages/home/home').then((m) => m.Home) },
  { path: 'ordem', loadComponent: () => import('../pages/ordem/ordem').then((m) => m.Ordem) },
  { path: 'create', loadComponent: () => import('../pages/create/create').then((m) => m.Create) },
  {
    path: 'categoria',
    loadComponent: () => import('../pages/categoria/categoria').then((m) => m.Categoria),
  },
  { path: '**', redirectTo: 'home' },
];
