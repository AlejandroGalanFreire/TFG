import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameStats } from 'src/app/models/gameStats';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly currentMatchSubject: BehaviorSubject<GameStats[]> =
    new BehaviorSubject<GameStats[]>([]);
  public currentMatch: Observable<GameStats[]> =
    this.currentMatchSubject.asObservable();

  constructor() { }

  setMatchSelectedDetail(item: GameStats[]) {
    this.currentMatchSubject.next(item);
  }
}
