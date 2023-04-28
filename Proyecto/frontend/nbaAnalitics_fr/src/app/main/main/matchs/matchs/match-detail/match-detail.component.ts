import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { GameStats } from 'src/app/models/gameStats';
import { ChartDataset, ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';
// import { Chart } from 'chart.js/dist';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit{

  private stats: GameStats[] = [];
  public lineChartData: ChartDataset[] = []; // datos a mostrar en el gráfico
  public lineChartLabels: Array<any> = ['1º cuarto', '2º cuarto', '3º cuarto', '4º cuarto'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  constructor(private readonly homeService: HomeService){ }

  ngOnInit(): void {
    this.homeService.currentMatch.subscribe(data => {
      this.stats = data;

      // creación de los gráficos
      this.initLineChart();
      this.initBarChart();
      this.initRadarChart();

    });
  }

  initLineChart(){
    var lineChartCanvas = document.getElementById("lineChart") as HTMLCanvasElement;
    const ctx = lineChartCanvas.getContext('2d');

    const team1 = this.stats[0];
    const team2 = this.stats[1];

    var lineChartData = {
      labels: ["1º Cuarto","2º Cuarto","3º Cuarto","4º Cuarto "],
      datasets: [
        {
          label: team1.team_name,
          data: [team1.period1Score, team1.period2Score, team1.period3Score, team1.period4Score]
        },
        {
          label: team2.team_name,
          data: [team2.period1Score, team2.period2Score, team2.period3Score, team2.period4Score]
        }
      ],
      options: {
        responsive: true
      }
    };

    if(ctx){
      var lineChart = new Chart(ctx, {
        type: 'line',
        data: lineChartData,
      });
    }
  }


  initBarChart(){
    var barChartCanvas = document.getElementById("barChart") as HTMLCanvasElement;
    const ctx = barChartCanvas.getContext('2d');

    const team1 = this.stats[0];
    const team2 = this.stats[1];

    var barChartData = {
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
      var barChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
      });
    }
  }

  initRadarChart(){
    var radarChartCanvas = document.getElementById("radarChart") as HTMLCanvasElement;
    const ctx = radarChartCanvas.getContext('2d');

    const team1 = this.stats[0];
    const team2 = this.stats[1];

    var radarChartData = {
      labels: ["Tiros","Tiros libres", "Triples"],
      datasets: [
        {
          label: team1.team_name,
          data: [team1.fg_pct * 100, team1.ft_pct * 100, team1.fg3_pct * 100]
        },
        {
          label: team2.team_name,
          data: [team2.fg_pct * 100, team2.ft_pct * 100, team2.fg3_pct * 100]
        }
      ]
    };

    if(ctx){
      var radarChart = new Chart(ctx, {
        type: 'radar',
        data: radarChartData,
      });
    }
  }
}
