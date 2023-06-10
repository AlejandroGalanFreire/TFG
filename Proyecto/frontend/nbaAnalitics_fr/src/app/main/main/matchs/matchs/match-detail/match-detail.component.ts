import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { GameStats } from 'src/app/models/gameStats';
import Chart from 'chart.js/auto';
import { Subscription } from 'rxjs';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit, OnDestroy {

  public stats: GameStats[] = [];
  private lineChart: any;
  private barChart: any;
  private radarChart: any;
  currentMatchSubscription!: Subscription;
  positionOptions: TooltipPosition[] = ['above'];
  position = new FormControl(this.positionOptions[0]);


  constructor(private readonly homeService: HomeService){ }

  ngOnDestroy(): void {
    this.currentMatchSubscription.unsubscribe();
  }

  ngOnInit(): void {
    Chart.defaults.font.size = 18;

    this.currentMatchSubscription = this.homeService.currentMatch.subscribe(data => {
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
          data: [team1.period1Score, team1.period2Score, team1.period3Score, team1.period4Score],
          backgroundColor: '#DA4167',
          borderColor: '#DA4167'
        },
        {
          label: team2.teamName,
          data: [team2.period1Score, team2.period2Score, team2.period3Score, team2.period4Score],
          backgroundColor: '#F49097',
          borderColor: '#F49097'
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
        options: {
          scales: {
            x: {
              ticks: {
                color: 'black'
              }
            },
            y: {
              ticks: {
                color: 'black'
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: 'black'
              }
            }
          }
        }
      });
    }
  }


  initBarChart(team1: any, team2: any){
    const barChartCanvas = document.getElementById("barChart") as HTMLCanvasElement;
    const ctx = barChartCanvas.getContext('2d');

    const barChartData = {
      labels: ["Asistencias","Rebotes", "Robos", "Pérdidas", "Faltas", "Bloqueos"],
      datasets: [
        {
          label: team1.teamName,
          data: [team1.ast, team1.reb, team1.stl, team1.tov, team1.pf, team1.blk],
          backgroundColor: '#DA4167',
          borderColor: '#DA4167'
        },
        {
          label: team2.teamName,
          data: [team2.ast, team2.reb, team2.stl, team2.tov, team2.pf, team2.blk],
          backgroundColor: '#F49097',
          borderColor: '#F49097'
        }
      ]
    };

    if(ctx){
      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        plugins: [ChartDataLabels],
        options: {
          scales: {
            x: {
              ticks: {
                color: 'black'
              }
            },
            y: {
              ticks: {
                color: 'black'
              }
            }
          },
          plugins: {
            datalabels: {
              anchor: 'center',
              align: 'center',
              color: 'black'
            },
            legend: {
              labels: {
                color: 'black'
              }
            }
          }
        }
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
          label: 'Tiros intentados',
          data: [team1.fgPct * 100, team1.ftPct * 100, team1.fg3Pct * 100],
        },
        {
          label: 'Tiros anotados',
          data: [team2.fgPct * 100, team2.ftPct * 100, team2.fg3Pct * 100]
        }
      ]
    };

    if(ctx){
      this.radarChart = new Chart(ctx, {
        type: 'radar',
        data: radarChartData,
        options: {
          plugins: {
            legend: {
              labels: {
                color: 'black'
              }
            }
          }
        }
      });
    }
  }
}
