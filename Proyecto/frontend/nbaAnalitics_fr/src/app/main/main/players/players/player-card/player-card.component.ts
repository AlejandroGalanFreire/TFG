import { Component, Input } from '@angular/core';
import { PlayerStats } from 'src/app/models/playerStats';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {

  @Input() player!: PlayerStats;


}
