import { Component, OnInit } from '@angular/core';
import { TeamStats } from 'src/app/models/teamStats';
import { TeamStatsByYear } from 'src/app/models/teamStatsByYear';
import { DataService } from 'src/app/services/data-service.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit{

  teamsStats: TeamStats[] = [];
  teamsStatsByYear: TeamStatsByYear[] = [];

  constructor(private dataService: DataService,
    private readonly homeService: HomeService) { }

  ngOnInit() {
    this.dataService.getTeamsStats().subscribe(
      (resp: any) => {
        this.teamsStats = JSON.parse(resp)
      }
    );

    this.dataService.getTeamsStatsLastFiveYears().subscribe(
      (resp: any) => {
        this.teamsStatsByYear = JSON.parse(resp)
      }
    );
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
