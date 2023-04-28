import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './main/main/home/home.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ClasificationComponent } from './main/main/clasification/clasification/clasification.component';
import { PlayersComponent } from './main/main/players/players/players.component';
import { TeamsComponent } from './main/main/teams/teams/teams.component';
import { InfoComponent } from './main/main/help/info/info.component';
import { RouterModule, Routes } from '@angular/router';
import { MatchsComponent } from './main/main/matchs/matchs/matchs.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatchDetailComponent } from './main/main/matchs/matchs/match-detail/match-detail.component';
import { NgChartsModule  } from 'ng2-charts';

const appRoutes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'clasification', component: ClasificationComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'information', component: InfoComponent},
  {path: 'matchs', component: MatchsComponent},
  {path: 'matchDetail', component: MatchDetailComponent}
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
    MatchsComponent,
    MatchDetailComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
