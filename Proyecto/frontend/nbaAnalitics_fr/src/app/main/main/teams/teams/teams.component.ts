import { Component, OnInit } from '@angular/core';
import { TeamStats } from 'src/app/models/teamStats';
import { TeamStatsByYear } from 'src/app/models/teamStatsByYear';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit{

  teamsStats: TeamStats[] = [];
  teamsStatsByYear: TeamStatsByYear[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTeamsStats().subscribe(
      (resp: any) => {
        this.teamsStats = JSON.parse(resp)
      }
    );

    this.dataService.getTeamsStatsLastFiveYears().subscribe(
      (resp: any) => {
        this.teamsStatsByYear = JSON.parse(resp)
        console.log(this.teamsStatsByYear);
      }
    );
  }
}
