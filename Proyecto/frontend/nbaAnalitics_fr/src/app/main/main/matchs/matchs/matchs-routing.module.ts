import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchsComponent } from './matchs.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';

const routes: Routes = [
  { path: 'matchs', component: MatchsComponent, pathMatch: 'prefix' },
  { path: 'matchDetail', component: MatchDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class MatchsRoutingModule { }
