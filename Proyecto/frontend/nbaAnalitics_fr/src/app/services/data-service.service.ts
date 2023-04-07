import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private scoreboardEastUrl = 'http://localhost:8080/rest/scoreboard/east';
  private scoreboardWestUrl = 'http://localhost:8080/rest/scoreboard/west';
  private teamsStatsUrl = 'http://localhost:8080/rest/teamstats';
  private playersStatsUrl = 'http://localhost:8080/rest/playerstats';

  constructor(private http: HttpClient) { }


  getEastClasification(){
    return this.http.get(this.scoreboardEastUrl, {responseType: 'text'});
  }

  getWestClasification(){
    return this.http.get(this.scoreboardWestUrl, {responseType: 'text'});
  }

  getTeamsStats(){
    return this.http.get(this.teamsStatsUrl, {responseType: 'text'});
  }

  getPlayersStats(){
    return this.http.get(this.playersStatsUrl, {responseType: 'text'});
  }
}
