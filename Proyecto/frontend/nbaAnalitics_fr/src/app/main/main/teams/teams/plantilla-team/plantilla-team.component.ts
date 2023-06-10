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

  team!: TeamStatsByYear;
  teamSubscription!: Subscription;

  constructor(private readonly homeService: HomeService){}

  ngOnInit(): void {
    this.templateSubscription = this.homeService.teamTemplate.subscribe((data) => {
      this.template = data;
    });

    this.teamSubscription = this.homeService.teamSelected.subscribe((data) => {
      this.team = data[4];
    });
  }

  ngOnDestroy(): void {
    this.templateSubscription.unsubscribe();
  }

  setPlayerSelectedDetail(playerId: string) {
    this.homeService.setPlayerSelectedDetail(playerId);
  }
}
