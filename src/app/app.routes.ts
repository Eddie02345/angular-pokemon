import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { Kanto } from './components/kanto/kanto';
import { Johto } from './components/johto/johto';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: Kanto },
  { path: 'johto', component: Johto },
  { path: '**', redirectTo: 'home' }
];
