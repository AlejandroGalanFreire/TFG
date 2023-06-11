import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ElemScoreboard } from 'src/app/models/elemScoreboard';
import { League } from 'src/app/models/league';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-clasification',
  templateUrl: './clasification.component.html',
  styleUrls: ['./clasification.component.scss']
})

export class ClasificationComponent implements OnInit, OnDestroy {

  leagueSelected: League = new League();
  clasification: ElemScoreboard[] = [];
  currentIndex = 0;
  leagueSelectedSubscription!: Subscription;
  clasificationSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnDestroy(): void {
    if(this.leagueSelectedSubscription){
      this.leagueSelectedSubscription.unsubscribe();
    }
    if(this.clasificationSubscription){
      this.clasificationSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.changeLeague('NBA');
  }

  changeLeague(leagueName: string){
    this.leagueSelectedSubscription = this.dataService.getLeague(leagueName).subscribe(
      (resp: any) => {
        this.leagueSelected = JSON.parse(resp);
        this.clasificationSubscription = this.dataService.getClasification(this.leagueSelected.leagueName).subscribe(
          (resp: any) => {
            this.clasification = JSON.parse(resp);
          }
        );
      }
    );
  }

  resetIndex() {
    this.currentIndex = 0;
  }

  getIndex(){
    this.currentIndex++;
    return this.currentIndex;
  }

}
