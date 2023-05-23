import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameStats } from 'src/app/models/gameStats';
import { DataService } from 'src/app/services/data-service.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.scss']
})
export class MatchsComponent {

  gamesStats: Array<GameStats[]> = new Array();
  currentDateSubject: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date("2023-04-09")); // fecha de fin de temporada regular
  currentDate: Observable<Date> = this.currentDateSubject.asObservable();
  selectedDate: string = "";

  constructor(private dataService: DataService,
    private readonly homeService: HomeService){}

  ngOnInit(): void {
    this.currentDate.subscribe(date => {
      this.selectedDate = date.getFullYear() + "-" + this.formatMonthAndDay(date.getMonth() + 1) + "-"
      + this.formatMonthAndDay(date.getDate());
      this.dataService.getGamesStatsByDate(this.selectedDate).subscribe(
        (resp: any) => {
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
