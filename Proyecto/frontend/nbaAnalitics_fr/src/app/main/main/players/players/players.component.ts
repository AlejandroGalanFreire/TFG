import { Component, OnInit } from '@angular/core';
import { PlayerStats } from 'src/app/models/playerStats';
import { DataService } from 'src/app/services/data-service.service';
import { HomeService } from '../../services/home.service';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit{

  playersStats: PlayerStats[] = [];
  filterData = '';
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);

  constructor(private dataService: DataService,
    private readonly homeService: HomeService){}

  ngOnInit(): void {
    this.dataService.getPlayersStats().subscribe(
      (resp: any) => {
        this.playersStats = JSON.parse(resp);
        this.homeService.setAllPlayers(this.playersStats);
      }
    );
  }

  setPlayerSelectedDetail(player: PlayerStats) {
    player.urlPicture = 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/' + player.playerId + '.png'
    this.homeService.setPlayerSelectedDetail(player);
  }
}
