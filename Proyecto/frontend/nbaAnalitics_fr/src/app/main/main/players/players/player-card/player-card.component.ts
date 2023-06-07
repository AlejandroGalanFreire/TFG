import { Component, Input } from '@angular/core';
import { PlayerInfo } from 'src/app/models/playerInfo';
import { HomeService } from '../../../services/home.service';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent {

  @Input() player!: PlayerInfo;
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);

  constructor(private readonly homeService: HomeService){}

  setPlayerSelectedDetail() {
    this.homeService.setPlayerSelectedDetail(this.player);
  }
}
