import { Injectable, signal } from '@angular/core';
import { GymLeader } from '../models/gym-leader.model';

@Injectable({ providedIn: 'root' })
export class HoennService {
  private registry = signal([
    {
      name: 'Roxanne',
      age: 15,
      location: 'Rustboro City',
      gymBadge: 'Stone Badge',
      gymType: 'Rock',
      typeColor: '#8A8A59',
      typeBgColor: '#F4F4EE',
      motto: 'The Rock-Loving Honors Student applying academic theory to defensive rock warfare.',
      pokemonTeam: 'Geodude (Lv. 14), Nosepass (Lv. 15)'
    },
    {
      name: 'Brawly',
      age: 19,
      location: 'Dewford Town',
      gymBadge: 'Knuckle Badge',
      gymType: 'Fighting',
      typeColor: '#962018',
      typeBgColor: '#FBECEB',
      motto: 'A big wave in rough seas! Conditioning pure martial discipline through ocean surfing.',
      pokemonTeam: 'Machop (Lv. 16), Makuhita (Lv. 19)'
    },
    {
      name: 'Wattson',
      age: 62,
      location: 'Mauville City',
      gymBadge: 'Dynamo Badge',
      gymType: 'Electric',
      typeColor: '#CA8A04',
      typeBgColor: '#FEF9C3',
      motto: 'The cheerful energizer of Mauville whose electric traps shock overconfident challengers.',
      pokemonTeam: 'Magnemite (Lv. 20), Voltorb (Lv. 20), Magneton (Lv. 22)'
    },
    {
      name: 'Flannery',
      age: 17,
      location: 'Lavaridge Town',
      gymBadge: 'Heat Badge',
      gymType: 'Fire',
      typeColor: '#EA580C',
      typeBgColor: '#FFEDD5',
      motto: 'One with fiery passion, testing endurance with blistering Overheat barrages.',
      pokemonTeam: 'Slugma (Lv. 24), Slugma (Lv. 24), Torkoal (Lv. 29)'
    },
    {
      name: 'Norman',
      age: 38,
      location: 'Petalburg City',
      gymBadge: 'Balance Badge',
      gymType: 'Normal',
      typeColor: '#7A7A5A',
      typeBgColor: '#F4F4F0',
      motto: 'A man in pursuit of true strength, commanding devastating Slaking strikes.',
      pokemonTeam: 'Slaking (Lv. 28), Vigoroth (Lv. 27), Slaking (Lv. 31)'
    },
    {
      name: 'Winona',
      age: 23,
      location: 'Fortree City',
      gymBadge: 'Feather Badge',
      gymType: 'Flying',
      typeColor: '#6B54BA',
      typeBgColor: '#F3EFFF',
      motto: 'The bird user taking flight toward the heavens with aerial mastery and Dragon Dance Altaria.',
      pokemonTeam: 'Swellow (Lv. 31), Pelipper (Lv. 30), Skarmory (Lv. 32), Altaria (Lv. 33)'
    },
    {
      name: 'Tate & Liza',
      age: 12,
      location: 'Mossdeep City',
      gymBadge: 'Mind Badge',
      gymType: 'Psychic',
      typeColor: '#DB2777',
      typeBgColor: '#FCE7F3',
      motto: 'Twin telepaths coordinating cosmic double battle combinations with Lunatone and Solrock.',
      pokemonTeam: 'Lunatone (Lv. 42), Solrock (Lv. 42)'
    },
    {
      name: 'Wallace',
      age: 26,
      location: 'Sootopolis City',
      gymBadge: 'Rain Badge',
      gymType: 'Water',
      typeColor: '#0284C7',
      typeBgColor: '#E0F2FE',
      motto: 'Artist of water whose graceful Milotic illusion sweeps challengers away in a flood of elegance.',
      pokemonTeam: 'Luvdisc (Lv. 40), Sealeo (Lv. 40), Seaking (Lv. 42), Whiscash (Lv. 42), Milotic (Lv. 43)'
    }
  ]);

  readonly leaders = this.registry.asReadonly();
}