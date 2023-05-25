import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { GameStats } from 'src/app/models/gameStats';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit{

  public stats: GameStats[] = [];
  private lineChart: any;
  private barChart: any;
  private radarChart: any;


  constructor(private readonly homeService: HomeService){ }

  ngOnInit(): void {
    this.homeService.currentMatch.subscribe(data => {
      this.stats = data;

      // creación de los gráficos
      this.initLineChart(this.stats[0], this.stats[1]);
      this.initBarChart(this.stats[0], this.stats[1]);
      this.initRadarChart(this.stats[0], this.stats[1]);

    });
  }

  initLineChart(team1: any, team2: any){
    const lineChartCanvas = document.getElementById("lineChart") as HTMLCanvasElement;
    const ctx = lineChartCanvas.getContext('2d');

    const lineChartData = {
      labels: ["1º Cuarto","2º Cuarto","3º Cuarto","4º Cuarto "],
      datasets: [
        {
          label: team1.teamName,
          data: [team1.period1Score, team1.period2Score, team1.period3Score, team1.period4Score]
        },
        {
          label: team2.teamName,
          data: [team2.period1Score, team2.period2Score, team2.period3Score, team2.period4Score]
        }
      ],
      options: {
        responsive: true
      }
    };

    if(ctx){
      this.lineChart = new Chart(ctx, {
        type: 'line',
        data: lineChartData,
      });
    }
  }


  initBarChart(team1: any, team2: any){
    const barChartCanvas = document.getElementById("barChart") as HTMLCanvasElement;
    const ctx = barChartCanvas.getContext('2d');

    const barChartData = {
      labels: ["Asistencias","Rebotes", "Robos"],
      datasets: [
        {
          label: team1.team_name,
          data: [team1.ast, team1.reb, team1.stl]
        },
        {
          label: team2.team_name,
          data: [team2.ast, team2.reb, team2.stl]
        }
      ]
    };

    if(ctx){
      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
      });
    }
  }

  initRadarChart(team1: any, team2: any){
    const radarChartCanvas = document.getElementById("radarChart") as HTMLCanvasElement;
    const ctx = radarChartCanvas.getContext('2d');

    const radarChartData = {
      labels: ["Tiros","Tiros libres", "Triples"],
      datasets: [
        {
          label: team1.team_name,
          data: [team1.fgPct * 100, team1.ftPct * 100, team1.fg3Pct * 100]
        },
        {
          label: team2.team_name,
          data: [team2.fgPct * 100, team2.ftPct * 100, team2.fg3Pct * 100]
        }
      ]
    };

    if(ctx){
      this.radarChart = new Chart(ctx, {
        type: 'radar',
        data: radarChartData,
      });
    }
  }
}
