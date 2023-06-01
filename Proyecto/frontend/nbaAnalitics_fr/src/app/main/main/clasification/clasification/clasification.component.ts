import { Component, OnInit } from '@angular/core';
import { ElemScoreboard } from 'src/app/models/elemScoreboard';
import { League } from 'src/app/models/league';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-clasification',
  templateUrl: './clasification.component.html',
  styleUrls: ['./clasification.component.scss']
})

export class ClasificationComponent implements OnInit {

  leagueSelected: League = new League();
  clasification: ElemScoreboard[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.changeLeague('NBA');
  }

  changeLeague(leagueName: string){
    this.dataService.getLeague(leagueName).subscribe(
      (resp: any) => {
        this.leagueSelected = JSON.parse(resp);
        this.dataService.getClasification(this.leagueSelected.leagueName).subscribe(
          (resp: any) => {
            this.clasification = JSON.parse(resp);
            console.log(this.clasification);
          }
        );
        console.log(this.leagueSelected);
      }
    );
  }

}
