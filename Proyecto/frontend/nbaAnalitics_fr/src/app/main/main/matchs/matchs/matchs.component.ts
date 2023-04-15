import { Component } from '@angular/core';
import { GameStats } from 'src/app/models/gameStats';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.scss']
})
export class MatchsComponent {

  gamesStats: GameStats[] = [];
  selectedDate: string = "2023-04-09";

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getGamesStatsByDate(this.selectedDate).subscribe(
      (resp: any) => {
        this.gamesStats = JSON.parse(resp)
      }
    );
  }
}
