import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameStats } from 'src/app/models/gameStats';
import { PlayerInfo } from 'src/app/models/playerInfo';
import { TeamStatsByYear } from 'src/app/models/teamStatsByYear';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly currentMatchSubject: BehaviorSubject<GameStats[]> =
    new BehaviorSubject<GameStats[]>([]);
  public currentMatch: Observable<GameStats[]> =
    this.currentMatchSubject.asObservable();

  private readonly playerSelectedSubject: BehaviorSubject<PlayerInfo> =
    new BehaviorSubject<PlayerInfo>(new PlayerInfo());
  public playerSelected: Observable<PlayerInfo> =
    this.playerSelectedSubject.asObservable();

  private readonly allPlayersSubject: BehaviorSubject<PlayerInfo[]> =
    new BehaviorSubject<PlayerInfo[]>([]);
  public allPlayers: Observable<PlayerInfo[]> =
    this.allPlayersSubject.asObservable();

  private readonly teamSelectedSubject: BehaviorSubject<TeamStatsByYear[]> =
    new BehaviorSubject<TeamStatsByYear[]>([]);
  public teamSelected: Observable<TeamStatsByYear[]> =
    this.teamSelectedSubject.asObservable();

  private readonly allTeamsSubject: BehaviorSubject<TeamStatsByYear[]> =
    new BehaviorSubject<TeamStatsByYear[]>([]);
  public allTeams: Observable<TeamStatsByYear[]> =
    this.allTeamsSubject.asObservable();

  setMatchSelectedDetail(item: GameStats[]) {
    this.currentMatchSubject.next(item);
  }

  setPlayerSelectedDetail(player: PlayerInfo) {
    this.playerSelectedSubject.next(player);
  }

  setAllPlayers(players: PlayerInfo[]) {
    this.allPlayersSubject.next(players);
  }

  setTeamSelectedDetail(teamData: TeamStatsByYear[]) {
    this.teamSelectedSubject.next(teamData);
  }

  setAllTeams(teams: TeamStatsByYear[]) {
    this.allTeamsSubject.next(teams);
  }
}
