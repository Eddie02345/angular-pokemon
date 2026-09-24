import { Injectable, signal } from '@angular/core';

export interface HoennLeader {
  name: string;
  town: string;
  badge: string;
  specialty: string;
  pokemonTeam: string;
}

@Injectable({
  providedIn: 'root'
})
export class HoennService {
  private registry = signal([
    {
      name: 'Roxanne',
      town: 'Rustboro City',
      badge: 'Stone Badge',
      specialty: 'Rock',
      pokemonTeam: 'Geodude (Lv. 14), Nosepass (Lv. 15)'
    },
    {
      name: 'Brawly',
      town: 'Dewford Town',
      badge: 'Knuckle Badge',
      specialty: 'Fighting',
      pokemonTeam: 'Machop (Lv. 16), Makuhita (Lv. 19)'
    },
    {
      name: 'Wattson',
      town: 'Mauville City',
      badge: 'Dynamo Badge',
      specialty: 'Electric',
      pokemonTeam: 'Magnemite (Lv. 20), Voltorb (Lv. 20), Magneton (Lv. 22)'
    },
    {
      name: 'Flannery',
      town: 'Lavaridge Town',
      badge: 'Heat Badge',
      specialty: 'Fire',
      pokemonTeam: 'Slugma (Lv. 24), Slugma (Lv. 24), Torkoal (Lv. 29)'
    },
    {
      name: 'Norman',
      town: 'Petalburg City',
      badge: 'Balance Badge',
      specialty: 'Normal',
      pokemonTeam: 'Slaking (Lv. 28), Vigoroth (Lv. 27), Slaking (Lv. 31)'
    },
    {
      name: 'Winona',
      town: 'Fortree City',
      badge: 'Feather Badge',
      specialty: 'Flying',
      pokemonTeam: 'Swellow (Lv. 31), Pelipper (Lv. 30), Skarmory (Lv. 32), Altaria (Lv. 33)'
    },
    {
      name: 'Tate & Liza',
      town: 'Mossdeep City',
      badge: 'Mind Badge',
      specialty: 'Psychic',
      pokemonTeam: 'Lunatone (Lv. 42), Solrock (Lv. 42)'
    },
    {
      name: 'Wallace',
      town: 'Sootopolis City',
      badge: 'Rain Badge',
      specialty: 'Water',
      pokemonTeam: 'Luvdisc (Lv. 40), Sealeo (Lv. 40), Seaking (Lv. 42), Whiscash (Lv. 42), Milotic (Lv. 43)'
    }
  ]);

  readonly leaders = this.registry.asReadonly();
}