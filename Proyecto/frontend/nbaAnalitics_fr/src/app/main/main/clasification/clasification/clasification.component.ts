import { Component, OnInit } from '@angular/core';
import { ElemScoreboard } from 'src/app/models/elemScoreboard';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-clasification',
  templateUrl: './clasification.component.html',
  styleUrls: ['./clasification.component.scss']
})
export class ClasificationComponent implements OnInit {

  eastClasificationData: ElemScoreboard[] = [];
  westClasificationData: ElemScoreboard[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEastClasification().subscribe(
      (resp: any) => {
        this.eastClasificationData = JSON.parse(resp)
      }
    );

    this.dataService.getWestClasification().subscribe(
      (resp: any) => {
        this.westClasificationData = JSON.parse(resp)
      }
    );
  }

}
