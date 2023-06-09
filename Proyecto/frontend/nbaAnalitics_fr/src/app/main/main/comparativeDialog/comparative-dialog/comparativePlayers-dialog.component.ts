import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-comparativePlayers-dialog',
  templateUrl: './comparativePlayers-dialog.component.html',
  styleUrls: ['./comparativePlayers-dialog.component.scss']
})
export class ComparativePlayersDialogComponent implements OnInit {

  private barChart: any;

  constructor(
    public dialogRef: MatDialogRef<ComparativePlayersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.initializeBarChart();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  initializeBarChart() {
    const barChartCanvas = document.getElementById("barChartComparative") as HTMLCanvasElement;
    const ctx = barChartCanvas.getContext('2d');

    const barChartData = {
      labels: ["PPP", "APP", "RePP", "EffPP"],
      datasets: [
        {
          label: this.data.playerDetail.playerName,
          data: [(this.data.playerDetail.pts / this.data.playerDetail.gp).toFixed(2), (this.data.playerDetail.ast / this.data.playerDetail.gp).toFixed(2),
          (this.data.playerDetail.reb / this.data.playerDetail.gp).toFixed(2),
          (this.data.playerDetail.EFF_PerGame).toFixed(2)],
          backgroundColor: ['#df94a0']
        },
        {
          label: this.data.playerToCompare.playerName,
          data: [(this.data.playerToCompare.pts / this.data.playerToCompare.gp).toFixed(2), (this.data.playerToCompare.ast / this.data.playerToCompare.gp).toFixed(2),
          (this.data.playerToCompare.reb / this.data.playerToCompare.gp).toFixed(2),
          (this.data.playerToCompare.EFF_PerGame).toFixed(2)],
          backgroundColor: ['#af6d78']
        }
      ]
    };

    if (ctx) {
      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        plugins: [ChartDataLabels],
        options: {
          indexAxis: 'y',
          plugins: {
            datalabels: {
              anchor: 'center',
              align: 'center',
              color: 'white'
            },
            legend: {
              labels: {
                color: 'white'
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: 'white'
              },
              grid: {
                color: 'white'
              }
            },
            y: {
              ticks: {
                color: 'white'
              },
              grid: {
                color: 'white'
              }
            },
          }
        }
      });
    }
  }


  getRound(numberToRound: number): string {
    return numberToRound.toFixed(2);
  }


}
