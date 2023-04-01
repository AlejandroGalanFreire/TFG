import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './main/main/home/home.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ClasificationComponent } from './main/main/clasification/clasification/clasification.component';
import { PlayersComponent } from './main/main/players/players/players.component';
import { TeamsComponent } from './main/main/teams/teams/teams.component';
import { InfoComponent } from './main/main/help/info/info.component';
import { RouterModule, Routes } from '@angular/router';
import { MatchsComponent } from './main/main/matchs/matchs/matchs.component';

const appRoutes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'clasification', component: ClasificationComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'information', component: InfoComponent},
  {path: 'matchs', component: MatchsComponent}
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
    InfoComponent,
    MatchsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
