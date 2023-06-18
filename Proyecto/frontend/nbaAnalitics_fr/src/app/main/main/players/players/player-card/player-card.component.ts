import { Component, Input } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {

  @Input() player: Player = new Player();

  constructor(private readonly homeService: HomeService){}

  setPlayerSelectedDetail() {
    this.homeService.setPlayerSelectedDetail(this.player);
  }
}
