import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { ContactComponent } from './contact/contact';

export const routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'skills', loadComponent: () => import('./skills/skills').then(m => m.Skills) },
  { path: 'contact', component: ContactComponent }
];