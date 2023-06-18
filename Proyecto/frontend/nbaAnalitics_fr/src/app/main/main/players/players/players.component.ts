import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { HomeService } from '../../services/home.service';
import {TooltipPosition} from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit, OnDestroy {

  playersInfo: Player[] = [];
  filterData = '';
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);
  playerInfoSubscription!: Subscription;
  emptyData = true;

  constructor(private dataService: DataService,
    private readonly homeService: HomeService){}

  ngOnDestroy(): void {
    this.playerInfoSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.playerInfoSubscription = this.dataService.getPlayersInfo().subscribe(
      (resp: any) => {
        this.playersInfo = JSON.parse(resp);
        if(this.playersInfo.length > 0){
          this.emptyData = false;
        } else {
          this.emptyData = true;
        }
      }
    );
  }
}
