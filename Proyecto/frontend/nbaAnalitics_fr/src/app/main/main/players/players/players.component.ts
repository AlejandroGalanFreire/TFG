import { Component, OnInit } from '@angular/core';
import { PlayerStats } from 'src/app/models/playerStats';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit{

  playersStats: PlayerStats[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getPlayersStats().subscribe(
      (resp: any) => {
        this.playersStats = JSON.parse(resp)
      }
    );
  }
}
