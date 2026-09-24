import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { Kanto } from './components/kanto/kanto';
import { Johto } from './components/johto/johto';
import { Hoenn } from './components/hoenn/hoenn';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: Kanto },
  { path: 'johto', component: Johto },
  { path: 'hoenn', component: Hoenn },
  { path: '**', redirectTo: 'home' }
];
