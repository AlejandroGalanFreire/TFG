import { Component } from '@angular/core';
import { TeamStats } from 'src/app/models/teamStats';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {

  teamsStats: TeamStats[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTeamsStats().subscribe(
      (resp: any) => {
        this.teamsStats = JSON.parse(resp)
      }
    );
  }
}
