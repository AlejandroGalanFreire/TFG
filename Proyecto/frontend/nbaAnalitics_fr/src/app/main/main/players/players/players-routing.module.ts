import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players.component';
import { PlayerDetailComponent } from './player-detail/player-detail/player-detail.component';

const routes: Routes =
[
  { path: 'players', component: PlayersComponent, pathMatch: 'prefix' },
  { path: 'playerDetail', component: PlayerDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
