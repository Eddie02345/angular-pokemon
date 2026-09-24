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
  hoennLeaders = this.hoennService.leaders;


  }


