import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private scoreboardEastUrl = 'http://localhost:8080/rest/scoreboard/east';

  constructor(private http: HttpClient) { }


  getData(){
    return this.http.get(this.scoreboardEastUrl, {responseType: 'text'});
  }
}
