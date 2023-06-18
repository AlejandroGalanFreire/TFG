import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './main/main/home/home.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClasificationComponent } from './main/main/clasification/clasification/clasification.component';
import { PlayersComponent } from './main/main/players/players/players.component';
import { TeamsComponent } from './main/main/teams/teams/teams.component';
import { RouterModule, Routes } from '@angular/router';
import { MatchsComponent } from './main/main/matchs/matchs/matchs.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatchDetailComponent } from './main/main/matchs/matchs/match-detail/match-detail.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { FilterPlayersPipe } from './pipes/playerPipes/filterPlayers.pipe';
import { PlayerDetailComponent } from './main/main/players/players/player-detail/player-detail/player-detail.component';
import { TeamsDetailComponent } from './main/main/teams/teams/teams-detail/teams-detail/teams-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { ComparativePlayersDialogComponent } from './main/main/comparativeDialog/comparative-dialog/comparativePlayers-dialog.component';
import { ComparativeTeamsDialogComponent } from './main/main/comparativeDialog/comparative-dialog/comparative-teams-dialog/comparative-teams-dialog.component';
import { FilterTeamsPipe } from './pipes/teamPipes/filterTeams.pipe';
import { FilterTeamByYearPipe } from './pipes/teamPipes/filter-team-by-year.pipe';
import { PlayerCardComponent } from './main/main/players/players/player-card/player-card.component';
import { TeamCardComponent } from './main/main/teams/teams/team-card/team-card.component';
import { MatIconModule } from '@angular/material/icon';
import { PlantillaTeamComponent } from './main/main/teams/teams/plantilla-team/plantilla-team.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'clasification', component: ClasificationComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'matchs', component: MatchsComponent },
  { path: 'matchDetail', component: MatchDetailComponent },
  { path: 'playerDetail', component: PlayerDetailComponent },
  { path: 'teamDetail', component: TeamsDetailComponent },
  { path: 'teamTemplate', component: PlantillaTeamComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClasificationComponent,
    PlayersComponent,
    TeamsComponent,
    MatchsComponent,
    MatchDetailComponent,
    FilterPlayersPipe,
    FilterTeamsPipe,
    PlayerDetailComponent,
    TeamsDetailComponent,
    ComparativePlayersDialogComponent,
    ComparativeTeamsDialogComponent,
    FilterTeamByYearPipe,
    PlayerCardComponent,
    TeamCardComponent,
    PlantillaTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    NgChartsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
