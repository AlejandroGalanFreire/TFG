import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';
import { TeamsDetailComponent } from './teams-detail/teams-detail/teams-detail.component';
import { PlantillaTeamComponent } from './plantilla-team/plantilla-team.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent, pathMatch: 'prefix' },
  { path: 'teamDetail', component: TeamsDetailComponent },
  { path: 'teamTemplate', component: PlantillaTeamComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
