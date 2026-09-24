import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymLeader } from '../../models/gym-leader.model';
import { LeaderInfoComponent } from '../leader-info/leader-info';

@Component({
  standalone: true,
  imports: [LeaderInfoComponent, CommonModule],
  selector: 'app-hoenn',
  styleUrl: './hoenn.css',
  templateUrl: './hoenn.html',
})
export class Hoenn {
  statusMessage = signal('Select a Gym Leader to register your challenge.');

  hoennLeaders = signal<GymLeader[]>([
    {
      name: 'Roxanne',
      age: 18,
      location: 'Rustboro City',
      gymBadge: 'Stone Badge',
      gymType: 'Rock',
      typeColor: '#8B6F47',
      typeBgColor: '#F5EFE7',
      motto: 'A dedicated student of the Pokémon Trainer School commanding resilient Rock-type defenses.',
      pokemonTeam: 'Geodude (Lv. 12), Nosepass (Lv. 15)'
    },
    {
      name: 'Brawly',
      age: 16,
      location: 'Dewford Town',
      gymBadge: 'Knuckle Badge',
      gymType: 'Fighting',
      typeColor: '#962018',
      typeBgColor: '#FBECEB',
      motto: 'A relentless surfer and martial artist whose Fighting Pokémon strike with explosive power.',
      pokemonTeam: 'Machop (Lv. 17), Makuhita (Lv. 18)'
    },
    {
      name: 'Wattson',
      age: 58,
      location: 'Mauville City',
      gymBadge: 'Dynamo Badge',
      gymType: 'Electric',
      typeColor: '#B88600',
      typeBgColor: '#FFF8D9',
      motto: 'A cheerful electrical engineer whose high-voltage Pokémon turn every battle into a power surge.',
      pokemonTeam: 'Magnemite (Lv. 22), Voltorb (Lv. 20), Magneton (Lv. 23)'
    },
    {
      name: 'Flannery',
      age: 18,
      location: 'Lavaridge Town',
      gymBadge: 'Heat Badge',
      gymType: 'Fire',
      typeColor: '#C43D1C',
      typeBgColor: '#FDEEE9',
      motto: 'A passionate volcanic trainer whose blazing determination burns hotter with every challenge.',
      pokemonTeam: 'Numel (Lv. 24), Slugma (Lv. 24), Torkoal (Lv. 26)'
    },
    {
      name: 'Norman',
      age: 39,
      location: 'Petalburg City',
      gymBadge: 'Balance Badge',
      gymType: 'Normal',
      typeColor: '#7A7A5A',
      typeBgColor: '#F4F4F0',
      motto: 'A disciplined strategist whose balanced Normal-type team rewards patience and precise tactics.',
      pokemonTeam: 'Slaking (Lv. 28), Vigoroth (Lv. 30), Slaking (Lv. 31)'
    },
    {
      name: 'Winona',
      age: 26,
      location: 'Fortree City',
      gymBadge: 'Feather Badge',
      gymType: 'Flying',
      typeColor: '#6B54BA',
      typeBgColor: '#F3EFFF',
      motto: 'A graceful aerial specialist commanding the skies with speed, precision, and unwavering focus.',
      pokemonTeam: 'Swablu (Lv. 31), Tropius (Lv. 31), Pelipper (Lv. 30), Altaria (Lv. 33)'
    },
    {
      name: 'Tate & Liza',
      age: 10,
      location: 'Mossdeep City',
      gymBadge: 'Mind Badge',
      gymType: 'Psychic',
      typeColor: '#C04776',
      typeBgColor: '#FCECF3',
      motto: 'Twin psychic prodigies whose perfectly coordinated double battles challenge both mind and strategy.',
      pokemonTeam: 'Lunatone (Lv. 42), Solrock (Lv. 42)'
    },
    {
      name: 'Wallace',
      age: 25,
      location: 'Sootopolis City',
      gymBadge: 'Rain Badge',
      gymType: 'Water',
      typeColor: '#3569B8',
      typeBgColor: '#EAF2FC',
      motto: 'An elegant master of Water Pokémon whose graceful strategies flow like the ocean itself.',
      pokemonTeam: 'Luvdisc (Lv. 40), Whiscash (Lv. 42), Sealeo (Lv. 40), Seaking (Lv. 42), Milotic (Lv. 43)'
    }
  ]);

  onChallengeReceived(eventMessage: string): void {
    this.statusMessage.set(eventMessage);
  }
}

