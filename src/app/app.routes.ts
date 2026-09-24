import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { Kanto } from './components/kanto/kanto';
import { Johto } from './components/johto/johto';

// TODO: Route '/hoenn' is temporarily disabled.
// Celio's Network Machine in the Sevii Islands still needs the Ruby and Sapphire plates. (Lore drop lmao)
// Tanong lang sir, sino starter nyo sa gen 3 (Treecko, Torchic, or Mudkip)? 

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: Kanto },
  { path: 'johto', component: Johto },
  { path: '**', redirectTo: 'home' }
];
