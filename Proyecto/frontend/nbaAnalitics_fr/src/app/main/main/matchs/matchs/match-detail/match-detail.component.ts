import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { GameStats } from 'src/app/models/gameStats';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit{

  private stats: GameStats[] = [];

  constructor(private readonly homeService: HomeService){ }

  ngOnInit(): void {
    this.homeService.currentMatch.subscribe(data => {
      this.stats = data;
      console.log(this.stats);
    });
  }



}
