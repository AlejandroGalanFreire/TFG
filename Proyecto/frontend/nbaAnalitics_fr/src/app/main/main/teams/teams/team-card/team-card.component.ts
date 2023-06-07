import { Component, Input } from '@angular/core';
import { TeamStats } from 'src/app/models/teamStats';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {

  @Input() team!: TeamStats;

  setTeamSelectedDetail() {}

}
