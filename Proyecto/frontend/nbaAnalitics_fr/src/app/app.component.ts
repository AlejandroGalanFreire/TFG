import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/nombre", {responseType: 'text'}).subscribe((resp: any) =>
      this.name = resp
    ),
    (error:any) => console.log(error);
  }
}
