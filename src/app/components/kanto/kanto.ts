import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymLeader } from '../../models/gym-leader.model';
import { LeaderInfoComponent } from '../leader-info/leader-info';

@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [LeaderInfoComponent, CommonModule],
  templateUrl: './kanto.html',
  styleUrl: './kanto.css',
})
export class Kanto {
  statusMessage = signal('Select a Gym Leader to register your challenge.');

  kantoLeaders = signal<GymLeader[]>([
    {
      name: 'Brock',
      age: 15,
      location: 'Pewter City',
      gymBadge: 'Boulder Badge',
      gymType: 'Rock',
      typeColor: '#8A8A59',
      typeBgColor: '#F4F4EE',
      motto: 'Known as the Rock-Solid Pokémon Trainer, testing patience and physical defense.',
      pokemonTeam: 'Geodude (Lv. 12), Onix (Lv. 14)'
    },
    {
      name: 'Misty',
      age: 14,
      location: 'Cerulean City',
      gymBadge: 'Cascade Badge',
      gymType: 'Water',
      typeColor: '#0284C7',
      typeBgColor: '#E0F2FE',
      motto: 'The Tomboyish Mermaid specializing in swift, offensive Water-type maneuvers.',
      pokemonTeam: 'Staryu (Lv. 18), Starmie (Lv. 21)'
    },
    {
      name: 'Lt. Surge',
      age: 33,
      location: 'Vermilion City',
      gymBadge: 'Thunder Badge',
      gymType: 'Electric',
      typeColor: '#CA8A04',
      typeBgColor: '#FEF9C3',
      motto: 'The Lightning American who unleashes high-voltage electric shock barrages.',
      pokemonTeam: 'Voltorb (Lv. 21), Pikachu (Lv. 18), Raichu (Lv. 24)'
    },
    {
      name: 'Erika',
      age: 21,
      location: 'Celadon City',
      gymBadge: 'Rainbow Badge',
      gymType: 'Grass',
      typeColor: '#16A34A',
      typeBgColor: '#DCFCE7',
      motto: 'A master of floral harmony whose Grass-types deploy potent status ailments.',
      pokemonTeam: 'Victreebel (Lv. 29), Tangela (Lv. 24), Vileplume (Lv. 29)'
    },
    {
      name: 'Koga',
      age: 42,
      location: 'Fuchsia City',
      gymBadge: 'Soul Badge',
      gymType: 'Poison',
      typeColor: '#9333EA',
      typeBgColor: '#F3E8FF',
      motto: 'A shinobi master employing toxic attrition and deceptive smoke screens.',
      pokemonTeam: 'Koffing (Lv. 37), Muk (Lv. 39), Weezing (Lv. 43)'
    },
    {
      name: 'Sabrina',
      age: 21,
      location: 'Saffron City',
      gymBadge: 'Marsh Badge',
      gymType: 'Psychic',
      typeColor: '#DB2777',
      typeBgColor: '#FCE7F3',
      motto: 'Endowed with natural telepathic mastery and devastating Special Attack power.',
      pokemonTeam: 'Kadabra (Lv. 38), Mr. Mime (Lv. 37), Alakazam (Lv. 43)'
    },
    {
      name: 'Blaine',
      age: 58,
      location: 'Cinnabar Island',
      gymBadge: 'Volcano Badge',
      gymType: 'Fire',
      typeColor: '#EA580C',
      typeBgColor: '#FFEDD5',
      motto: 'The quiz-loving scientist whose blazing Fire Pokémon scorch challengers.',
      pokemonTeam: 'Growlithe (Lv. 42), Ponyta (Lv. 40), Arcanine (Lv. 47)'
    },
    {
      name: 'Giovanni',
      age: 45,
      location: 'Viridian City',
      gymBadge: 'Earth Badge',
      gymType: 'Ground',
      typeColor: '#B45309',
      typeBgColor: '#FEF3C7',
      motto: 'The clandestine Team Rocket leader who commands seismic Ground titans.',
      pokemonTeam: 'Rhyhorn (Lv. 45), Dugtrio (Lv. 42), Nidoqueen (Lv. 44), Rhydon (Lv. 50)'
    }
  ]);

  onChallengeReceived(eventMessage: string): void {
    this.statusMessage.set(eventMessage);
  }
}