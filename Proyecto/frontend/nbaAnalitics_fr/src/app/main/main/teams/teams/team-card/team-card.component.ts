import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TeamStats } from 'src/app/models/teamStats';
import { TeamStatsByYear } from 'src/app/models/teamStatsByYear';
import { DataService } from 'src/app/services/data-service.service';
import { HomeService } from '../../../services/home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit, OnDestroy {

  @Input() team!: TeamStats;

  teamsFiveYearsSubscription!: Subscription;
  teamsStatsByYear: TeamStatsByYear[] = [];

  constructor(private dataService: DataService,
    private readonly homeService: HomeService) { }

  ngOnInit(): void {
    this.teamsFiveYearsSubscription = this.dataService.getTeamsStatsLastFiveYears().subscribe(
      (resp: any) => {
        this.teamsStatsByYear = JSON.parse(resp)
        this.homeService.setAllTeams(this.teamsStatsByYear);
      }
    );
  }

  ngOnDestroy(): void {
    this.teamsFiveYearsSubscription.unsubscribe();
  }

  setTeamSelectedDetail(teamid: string) {
    let dataTeam: TeamStatsByYear[] = [];
    for (let i = 0; i < this.teamsStatsByYear.length; i++) {
      if (this.teamsStatsByYear[i].teamId === parseInt(teamid) && dataTeam.length < 5) {
        dataTeam.push(this.teamsStatsByYear[i]);
      }
    }
    this.homeService.setTeamSelectedDetail(dataTeam);
    dataTeam = [];
  }

}
