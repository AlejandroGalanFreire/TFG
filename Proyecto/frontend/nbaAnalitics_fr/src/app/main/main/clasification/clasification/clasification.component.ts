import { Component, OnInit } from '@angular/core';
import { ElemScoreboard } from 'src/app/models/elemScoreboard';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-clasification',
  templateUrl: './clasification.component.html',
  styleUrls: ['./clasification.component.scss']
})
export class ClasificationComponent implements OnInit {

  data: ElemScoreboard[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      (resp: any) => {
        this.data = JSON.parse(resp)
      }
    );
  }

}
