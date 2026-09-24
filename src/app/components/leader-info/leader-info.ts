import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { GymLeader } from '../../models/gym-leader.model';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'
})
export class LeaderInfoComponent {
  leader = input.required<GymLeader>();

  showMonologue = signal(false);

  challengeIssued = output<string>();

  toggleMonologue(): void {
    this.showMonologue.update((visible) => !visible);
  }

  issueChallenge(): void {
    this.challengeIssued.emit(
      `Challenger registered for ${this.leader().name}'s Gym in ${this.leader().location}!`
    );
  }
}