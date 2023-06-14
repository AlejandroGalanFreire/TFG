import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { PlayerInfo } from 'src/app/models/playerInfo';
import { Subscription } from 'rxjs';
import { TeamStatsByYear } from 'src/app/models/teamStatsByYear';

@Component({
  selector: 'app-plantilla-team',
  templateUrl: './plantilla-team.component.html',
  styleUrls: ['./plantilla-team.component.scss']
})
export class PlantillaTeamComponent implements OnInit, OnDestroy{

  template!: PlayerInfo[];
  templateSubscription!: Subscription;

  team: TeamStatsByYear = new TeamStatsByYear();
  teamSubscription!: Subscription;
  emptyDataTeam = true;
  emptyDataTemplate = true;

  constructor(private readonly homeService: HomeService){}

  ngOnInit(): void {
    this.templateSubscription = this.homeService.teamTemplate.subscribe((data) => {
      if(data.length > 0){
        this.emptyDataTemplate = false;
      }else {
        this.emptyDataTemplate = true;
      }
      this.template = data;
    });

    this.teamSubscription = this.homeService.teamSelected.subscribe((data) => {
      if(data && data.length >= 5){
        if(data.length > 0){
          this.emptyDataTeam = false;
        }else {
          this.emptyDataTeam = true;
        }
        this.team = data[4];
      }
    });
  }

  ngOnDestroy(): void {
    if(this.templateSubscription){
      this.templateSubscription.unsubscribe();
    }
    if(this.teamSubscription){
      this.teamSubscription.unsubscribe();
    }
  }

  setPlayerSelectedDetail(playerId: string) {
    this.homeService.setPlayerSelectedDetail(playerId);
  }
}
