import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderInfoComponent } from '../leader-info/leader-info';
import { HoennService } from '../../services/hoenn';

@Component({
  standalone: true,
  imports: [LeaderInfoComponent, CommonModule],
  selector: 'app-hoenn',
  styleUrl: './hoenn.css',
  templateUrl: './hoenn.html',
})
export class Hoenn {
  private hoennService = inject(HoennService);

  // Expose the read-only signal to the template
  hoennLeaders = this.hoennService.hoennLeaders;

  statusMessage = signal('Select a Gym Leader to register your challenge.');

  onChallengeReceived(eventMessage: string): void {
    this.statusMessage.set(eventMessage);
  }
}

