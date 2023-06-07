import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private scoreboardUrl = 'http://localhost:8080/rest/scoreboard/clasification';
  private leagueUrl = 'http://localhost:8080/rest/league';
  private teamsStatsUrl = 'http://localhost:8080/rest/teamstats';
  private teamsStatsByYearUrl = 'http://localhost:8080/rest/teamstatsbyyear';
  private playersStatsUrl = 'http://localhost:8080/rest/playersinfo';
  private gamesStatsUrl = 'http://localhost:8080/rest/gamesstatsbydate';

  constructor(private http: HttpClient) { }


  getClasification(leagueSelected: string){
    return this.http.get(this.scoreboardUrl, {
      params:{
        league: leagueSelected
      },
      responseType: 'text'
    });
  }

  getLeague(leagueName: string){
    return this.http.get(this.leagueUrl, {
      params:{
        leagueName: leagueName
      },
      responseType: 'text'
    });
  }

  getTeamsStats(){
    return this.http.get(this.teamsStatsUrl, {responseType: 'text'});
  }

  getTeamsStatsLastFiveYears(){
    return this.http.get(this.teamsStatsByYearUrl, {responseType: 'text'});
  }

  getPlayersInfo(){
    return this.http.get(this.playersStatsUrl, {responseType: 'text'});
  }

  getGamesStatsByDate(dateValue: string){
    return this.http.get(this.gamesStatsUrl, {
      params: {
        date: dateValue
      },
      responseType: 'text'
    });
  }
}
