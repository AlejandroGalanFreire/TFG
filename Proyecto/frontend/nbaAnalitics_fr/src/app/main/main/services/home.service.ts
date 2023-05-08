import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameStats } from 'src/app/models/gameStats';
import { PlayerStats } from 'src/app/models/playerStats';

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

  constructor() { }

  setMatchSelectedDetail(item: GameStats[]) {
    this.currentMatchSubject.next(item);
  }

  setPlayerSelectedDetail(player: PlayerStats) {
    this.playerSelectedSubject.next(player);
  }
}
