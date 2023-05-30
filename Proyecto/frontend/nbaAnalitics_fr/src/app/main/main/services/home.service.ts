import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameStats } from 'src/app/models/gameStats';
import { PlayerStats } from 'src/app/models/playerStats';
import { TeamStatsByYear } from 'src/app/models/teamStatsByYear';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly currentMatchSubject: BehaviorSubject<GameStats[]> =
    new BehaviorSubject<GameStats[]>([]);
  public currentMatch: Observable<GameStats[]> =
    this.currentMatchSubject.asObservable();

  private readonly playerSelectedSubject: BehaviorSubject<PlayerStats> =
    new BehaviorSubject<PlayerStats>(new PlayerStats());
  public playerSelected: Observable<PlayerStats> =
    this.playerSelectedSubject.asObservable();

  private readonly teamSelectedSubject: BehaviorSubject<TeamStatsByYear[]> =
    new BehaviorSubject<TeamStatsByYear[]>([]);
  public teamSelected: Observable<TeamStatsByYear[]> =
    this.teamSelectedSubject.asObservable();

  setMatchSelectedDetail(item: GameStats[]) {
    this.currentMatchSubject.next(item);
  }

  setPlayerSelectedDetail(player: PlayerStats) {
    this.playerSelectedSubject.next(player);
  }

  setTeamSelectedDetail(teamData: TeamStatsByYear[]) {
    this.teamSelectedSubject.next(teamData);
  }
}
