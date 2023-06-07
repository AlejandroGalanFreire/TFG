import { Component, Input } from '@angular/core';
import { PlayerInfo } from 'src/app/models/playerInfo';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {

  @Input() player!: PlayerInfo;

  constructor(private readonly homeService: HomeService){}

  setPlayerSelectedDetail() {
    this.homeService.setPlayerSelectedDetail(this.player.playerId);
  }
}
