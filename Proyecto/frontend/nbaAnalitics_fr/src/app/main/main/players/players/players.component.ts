import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { HomeService } from '../../services/home.service';
import {TooltipPosition} from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { PlayerInfo } from 'src/app/models/playerInfo';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit{

  playersInfo: PlayerInfo[] = [];
  filterData = '';
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);

  constructor(private dataService: DataService,
    private readonly homeService: HomeService){}

  ngOnInit(): void {
    this.dataService.getPlayersInfo().subscribe(
      (resp: any) => {
        this.playersInfo = JSON.parse(resp);
        this.homeService.setAllPlayers(this.playersInfo);
      }
    );
  }
}
