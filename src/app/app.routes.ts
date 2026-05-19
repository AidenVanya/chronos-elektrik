import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'booking', loadComponent: () => import('./pages/booking/booking.component').then(m => m.BookingComponent) },
  { path: 'services', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
  { path: 'why-us', loadComponent: () => import('./pages/why-us/why-us.component').then(m => m.WhyUsComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'coverage', loadComponent: () => import('./pages/coverage/coverage.component').then(m => m.CoverageComponent) },
  { path: '**', redirectTo: '' }
];
