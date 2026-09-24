import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymLeader } from '../../models/gym-leader.model';
import { LeaderInfoComponent } from '../leader-info/leader-info';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [LeaderInfoComponent, CommonModule],
  templateUrl: './johto.html',
  styleUrl: './johto.css',
})
export class Johto {
  statusMessage = signal('Select a Gym Leader to register your challenge.');

  johtoLeaders = signal<GymLeader[]>([
    {
      name: 'Falkner',
      age: 18,
      location: 'Violet City',
      gymBadge: 'Zephyr Badge',
      gymType: 'Flying',
      typeColor: '#6B54BA',
      typeBgColor: '#F3EFFF',
      motto: 'The elegant avian trainer commanding high-altitude aerial strikes.',
      pokemonTeam: 'Pidgey (Lv. 7), Pidgeotto (Lv. 9)'
    },
    {
      name: 'Bugsy',
      age: 12,
      location: 'Azalea Town',
      gymBadge: 'Hive Badge',
      gymType: 'Bug',
      typeColor: '#7A8C0B',
      typeBgColor: '#F6F9E6',
      motto: 'The walking bug encyclopedia using razor-sharp Scyther fury cutter assaults.',
      pokemonTeam: 'Metapod (Lv. 14), Kakuna (Lv. 14), Scyther (Lv. 16)'
    },
    {
      name: 'Whitney',
      age: 16,
      location: 'Goldenrod City',
      gymBadge: 'Plain Badge',
      gymType: 'Normal',
      typeColor: '#7A7A5A',
      typeBgColor: '#F4F4F0',
      motto: 'Deceptively sweet trainer famous for an unstoppable Miltank Rollout offensive.',
      pokemonTeam: 'Clefairy (Lv. 18), Miltank (Lv. 20)'
    },
    {
      name: 'Morty',
      age: 24,
      location: 'Ecruteak City',
      gymBadge: 'Fog Badge',
      gymType: 'Ghost',
      typeColor: '#533C78',
      typeBgColor: '#F0EAF8',
      motto: 'A mystic seer whose ghostly Pokémon pierce illusions and manipulate sleep.',
      pokemonTeam: 'Gastly (Lv. 21), Haunter (Lv. 21), Gengar (Lv. 25)'
    },
    {
      name: 'Chuck',
      age: 41,
      location: 'Cianwood City',
      gymBadge: 'Storm Badge',
      gymType: 'Fighting',
      typeColor: '#962018',
      typeBgColor: '#FBECEB',
      motto: 'Conditioned by 24-hour waterfall endurance training with unrelenting martial arts.',
      pokemonTeam: 'Primeape (Lv. 27), Poliwrath (Lv. 30)'
    },
    {
      name: 'Jasmine',
      age: 19,
      location: 'Olivine City',
      gymBadge: 'Mineral Badge',
      gymType: 'Steel',
      typeColor: '#686884',
      typeBgColor: '#F0F0F6',
      motto: 'The quiet guardian of the sea lighthouse wielding impenetrable Steelix armor.',
      pokemonTeam: 'Magnemite (Lv. 30), Steelix (Lv. 35)'
    },
    {
      name: 'Pryce',
      age: 70,
      location: 'Mahogany Town',
      gymBadge: 'Glacier Badge',
      gymType: 'Ice',
      typeColor: '#2B8484',
      typeBgColor: '#EAF6F6',
      motto: 'Fifty years of harsh winter discipline proving the austere power of freezing cold.',
      pokemonTeam: 'Seel (Lv. 27), Dewgong (Lv. 29), Piloswine (Lv. 31)'
    },
    {
      name: 'Clair',
      age: 22,
      location: 'Blackthorn City',
      gymBadge: 'Rising Badge',
      gymType: 'Dragon',
      typeColor: '#5321BF',
      typeBgColor: '#F1EBFD',
      motto: 'Descendant of the master dragon clan whose Kingdra demands absolute tactical mastery.',
      pokemonTeam: 'Dragonair (Lv. 37), Kingdra (Lv. 40)'
    }
  ]);

  onChallengeReceived(eventMessage: string): void {
    this.statusMessage.set(eventMessage);
  }
}