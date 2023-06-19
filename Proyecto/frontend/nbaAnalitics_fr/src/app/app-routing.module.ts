import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificationComponent } from './main/main/clasification/clasification/clasification.component';
import { HomeComponent } from './main/main/home/home.component';
import { PlayersModule } from './main/main/players/players/players.module';
import { TeamsModule } from './main/main/teams/teams/teams.module';
import { MatchsModule } from './main/main/matchs/matchs/matchs.module';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'clasification', component: ClasificationComponent },
  { path: 'players', loadChildren: () => import('./main/main/players/players/players.module').then(m => m.PlayersModule) },
  { path: 'teams', loadChildren: () => import('./main/main/teams/teams/teams.module').then(m => m.TeamsModule) },
  { path: 'matchs', loadChildren: () => import('./main/main/matchs/matchs/matchs.module').then(m => m.MatchsModule) },
]

@NgModule({
  imports: [
    PlayersModule,
    TeamsModule,
    MatchsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
