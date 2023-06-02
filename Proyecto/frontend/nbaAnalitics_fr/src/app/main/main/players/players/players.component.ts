import { Component, OnInit } from '@angular/core';
import { PlayerStats } from 'src/app/models/playerStats';
import { DataService } from 'src/app/services/data-service.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit{

  playersStats: PlayerStats[] = [];
  filterData = '';

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
    this.homeService.setPlayerSelectedDetail(player);
  }
}
