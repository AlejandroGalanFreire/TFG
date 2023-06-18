import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { HomeService } from '../../../services/home.service';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/models/player';
import { TeamByYear } from 'src/app/models/teamByYear';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit, OnDestroy {

  @Input() team: TeamByYear = new TeamByYear();

  teamsFiveYearsSubscription!: Subscription;
  teamsStatsByYear: TeamByYear[] = [];
  teamTemplate: Player[] = [];
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

  setTeamSelectedDetail(teamid: number) {
    let dataTeam: TeamByYear[] = [];
    for (let team of this.teamsStatsByYear) {
      if (team.teamId === teamid && dataTeam.length < 5) {
        dataTeam.push(team);
      }
    }
    this.homeService.setTeamSelectedDetail(dataTeam);
  }

  obtainTemplate(teamId: number){
    this.setTeamSelectedDetail(teamId);
    this.homeService.setTeamTemplate(this.teamTemplate);
  }

}
