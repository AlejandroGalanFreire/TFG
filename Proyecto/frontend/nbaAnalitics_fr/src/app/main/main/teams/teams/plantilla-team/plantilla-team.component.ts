import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/models/player';
import { TeamByYear } from 'src/app/models/teamByYear';

@Component({
  selector: 'app-plantilla-team',
  templateUrl: './plantilla-team.component.html',
  styleUrls: ['./plantilla-team.component.scss']
})
export class PlantillaTeamComponent implements OnInit, OnDestroy{

  template!: Player[];
  templateSubscription!: Subscription;

  team: TeamByYear = new TeamByYear();
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

  setPlayerSelectedDetail(player: Player) {
    this.homeService.setPlayerSelectedDetail(player);
  }
}
