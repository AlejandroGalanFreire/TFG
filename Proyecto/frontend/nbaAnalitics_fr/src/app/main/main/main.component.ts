import { Component, OnInit } from '@angular/core';
import { ElemScoreboard } from 'src/app/models/elemScoreboard';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data: ElemScoreboard[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      (resp: any) => {
        this.data = JSON.parse(resp)
        console.log(this.data);
      }
    );
  }
}
