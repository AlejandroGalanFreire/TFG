import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TeamStats } from 'src/app/models/teamStats';
import { TeamStatsByYear } from 'src/app/models/teamStatsByYear';
import { DataService } from 'src/app/services/data-service.service';
import { HomeService } from '../../../services/home.service';
import { Subscription } from 'rxjs';
import { PlayerInfo } from 'src/app/models/playerInfo';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit, OnDestroy {

  @Input() team: TeamStats = new TeamStats();

  teamsFiveYearsSubscription!: Subscription;
  teamsStatsByYear: TeamStatsByYear[] = [];
  teamTemplate: PlayerInfo[] = [];
  teamTemplateSubscription!: Subscription;

  constructor(private dataService: DataService,
    private readonly homeService: HomeService) { }

  ngOnInit(): void {
    this.teamsFiveYearsSubscription = this.dataService.getTeamsStatsLastFiveYears().subscribe(
      (resp: any) => {
        this.teamsStatsByYear = JSON.parse(resp)
        this.homeService.setAllTeams(this.teamsStatsByYear);
      }
    );
    this.teamTemplateSubscription = this.dataService.getTeamTemplate(this.team.teamId).subscribe((data) => {
      this.teamTemplate = JSON.parse(data);
    });
  }

  ngOnDestroy(): void {
    this.teamsFiveYearsSubscription.unsubscribe();
    if(this.teamTemplateSubscription){
      this.teamTemplateSubscription.unsubscribe();
    }
  }

  setTeamSelectedDetail(teamid: string) {
    let dataTeam: TeamStatsByYear[] = [];
    for (let team of this.teamsStatsByYear) {
      if (team.teamId === parseInt(teamid) && dataTeam.length < 5) {
        dataTeam.push(team);
      }
    }
    this.homeService.setTeamSelectedDetail(dataTeam);
  }

  obtainTemplate(teamId: string){
    this.setTeamSelectedDetail(teamId);
    this.homeService.setTeamTemplate(this.teamTemplate);
  }

}
