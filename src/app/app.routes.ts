import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./features/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'quienes-somos',
    loadComponent: () => import('./features/quienes-somos/quienes-somos.page').then( m => m.QuienesSomosPage)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./features/servicios/servicios.page').then( m => m.ServiciosPage)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contacto/contacto.page').then( m => m.ContactoPage)
  },
];
