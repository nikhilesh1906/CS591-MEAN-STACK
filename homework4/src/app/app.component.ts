import { Component, OnInit } from '@angular/core';
import { WeathersService } from './weathers.service';
import { CookieService } from 'ngx-cookie-service';
// import {Observable} from 'rxjs/Rx';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Homework4';
  public weather;
  cookieValue = 'UNKNOWN';

  constructor(private weatherService: WeathersService, private cookieService: CookieService) { }

  ngOnInit() {
    this.getWeather();
    this.cookieService.set( 'Test', 'Hello World' );
    this.cookieValue = this.cookieService.get('Test');
  }


  getWeather() {
    this.weatherService.getWeather().subscribe(
      // the first argument is a function which runs on success
      data => { this.weather = data; },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading weather')
    );
  }
}
