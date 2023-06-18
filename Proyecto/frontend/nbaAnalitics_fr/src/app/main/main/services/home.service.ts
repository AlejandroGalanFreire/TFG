import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameElem } from 'src/app/models/gameElem';
import { Player } from 'src/app/models/player';
import { TeamByYear } from 'src/app/models/teamByYear';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly currentMatchSubject: BehaviorSubject<GameElem[]> =
    new BehaviorSubject<GameElem[]>([]);
  public currentMatch: Observable<GameElem[]> =
    this.currentMatchSubject.asObservable();

  private readonly playerSelectedSubject: BehaviorSubject<Player> =
    new BehaviorSubject<Player>(new Player());
  public playerSelected: Observable<Player> =
    this.playerSelectedSubject.asObservable();

  private readonly allPlayersSubject: BehaviorSubject<Player[]> =
    new BehaviorSubject<Player[]>([]);
  public allPlayers: Observable<Player[]> =
    this.allPlayersSubject.asObservable();

  private readonly teamTemplateSubject: BehaviorSubject<Player[]> =
    new BehaviorSubject<Player[]>([]);
  public teamTemplate: Observable<Player[]> =
    this.teamTemplateSubject.asObservable();

  private readonly teamSelectedSubject: BehaviorSubject<TeamByYear[]> =
    new BehaviorSubject<TeamByYear[]>([]);
  public teamSelected: Observable<TeamByYear[]> =
    this.teamSelectedSubject.asObservable();

  private readonly allTeamsSubject: BehaviorSubject<TeamByYear[]> =
    new BehaviorSubject<TeamByYear[]>([]);
  public allTeams: Observable<TeamByYear[]> =
    this.allTeamsSubject.asObservable();



  setMatchSelectedDetail(item: GameElem[]) {
    this.currentMatchSubject.next(item);
  }

  setPlayerSelectedDetail(player: Player) {
    this.playerSelectedSubject.next(player);
  }

  setAllPlayers(players: Player[]) {
    this.allPlayersSubject.next(players);
  }

  setTeamTemplate(players: Player[]) {
    this.teamTemplateSubject.next(players);
  }

  setTeamSelectedDetail(teamData: TeamByYear[]) {
    this.teamSelectedSubject.next(teamData);
  }

  setAllTeams(teams: TeamByYear[]) {
    this.allTeamsSubject.next(teams);
  }
}
