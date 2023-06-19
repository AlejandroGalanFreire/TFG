import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamsDetailComponent } from './teams-detail/teams-detail/teams-detail.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { PlantillaTeamComponent } from './plantilla-team/plantilla-team.component';
import { ComparativeTeamsDialogComponent } from '../../comparativeDialog/comparative-dialog/comparative-teams-dialog/comparative-teams-dialog.component';
import { FilterTeamByYearPipe } from 'src/app/pipes/teamPipes/filter-team-by-year.pipe';
import { FilterTeamsPipe } from 'src/app/pipes/teamPipes/filterTeams.pipe';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TeamsComponent,
    TeamsDetailComponent,
    TeamCardComponent,
    PlantillaTeamComponent,
    ComparativeTeamsDialogComponent,
    FilterTeamByYearPipe,
    FilterTeamsPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTooltipModule,
    MatIconModule,
    TeamsRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeamsModule { }
