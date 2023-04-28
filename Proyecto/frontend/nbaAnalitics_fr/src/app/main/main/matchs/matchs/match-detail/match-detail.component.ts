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

      this.initLineChart()
      // first teams
      // const team1 = this.stats[0];
      // if(team1){
      //   const periodsTeam1 = [team1.period1Score, team1.period2Score, team1.period3Score, team1.period4Score]
      //   this.lineChartData = [
      //     {
      //       data: periodsTeam1,
      //       label: team1.team_name,
      //       backgroundColor: 'rgba(77, 192, 232, 0.3)',
      //       borderColor: 'rgba(77, 192, 232, 0.8)',
      //       fill: false
      //     }
      //   ];
      // }

    });
  }

  initLineChart(){
    var lineChartCanvas = document.getElementById("lineChart") as HTMLCanvasElement;
    const ctx = lineChartCanvas.getContext('2d');

    const team1 = this.stats[0];

    var lineChartData = {
      labels: ["1º Cuarto","2º Cuarto","3º Cuarto","4º Cuarto "],
      datasets: [{
        label: team1.team_name,
        data: [team1.period1Score, team1.period2Score, team1.period3Score, team1.period4Score]
      }]
    };

    var lineChartOptions = {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 80,
          fontColor: 'black'
        }
      }
    }

    if(ctx){
      var lineChart = new Chart(ctx, {
        type: 'line',
        data: lineChartData,
        // options: lineChartOptions
      });
    }
  }

}
