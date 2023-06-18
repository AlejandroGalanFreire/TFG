import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-service.service';
import { HomeService } from '../../services/home.service';
import { GameElem } from 'src/app/models/gameElem';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.scss']
})
export class MatchsComponent implements OnInit, OnDestroy {

  gamesStats: Array<GameElem[]> = new Array();
  currentDateSubject: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date("2023-04-09")); // fecha de fin de temporada regular
  currentDate: Observable<Date> = this.currentDateSubject.asObservable();
  selectedDate: string = "";
  hasGameInDate = true;
  currentDateSubscription!: Subscription;
  gamesSubscription!: Subscription;

  constructor(private dataService: DataService,
    private readonly homeService: HomeService){}

  ngOnDestroy(): void {
    this.currentDateSubscription.unsubscribe();
    this.gamesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.currentDateSubscription = this.currentDate.subscribe(date => {
      this.selectedDate = date.getFullYear() + "-" + this.formatMonthAndDay(date.getMonth() + 1) + "-"
      + this.formatMonthAndDay(date.getDate());
      this.gamesSubscription = this.dataService.getGamesStatsByDate(this.selectedDate).subscribe(
        (resp: any) => {
          if(resp === "[]"){
            this.hasGameInDate = false;
          }else{
            this.hasGameInDate = true;
          }
          this.gamesStats = JSON.parse(resp);
        }
      );
    });

  }

  // event es del tipo MatDatepickerInputEvent
  dateEvent(event: any) {
    if(event.value){
      this.currentDateSubject.next(event.value);
    }
  }

  formatMonthAndDay(numero: number): string{
    if(numero < 10){
      return "0" + numero;
    }
    return numero.toString();
  }

  // item es del tipo GameStats[]
  setMatchSelectedDetail(item: any){
    this.homeService.setMatchSelectedDetail(item);
  }

}
