import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayerDetailComponent } from './player-detail/player-detail/player-detail.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { ComparativePlayersDialogComponent } from '../../comparativeDialog/comparative-dialog/comparativePlayers-dialog.component';
import { FilterPlayersPipe } from 'src/app/pipes/playerPipes/filterPlayers.pipe';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PlayersRoutingModule } from './players-routing.module';



@NgModule({
  declarations: [
    PlayersComponent,
    PlayerDetailComponent,
    PlayerCardComponent,
    ComparativePlayersDialogComponent,
    FilterPlayersPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTooltipModule,
    RouterModule,
    MatIconModule,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }
