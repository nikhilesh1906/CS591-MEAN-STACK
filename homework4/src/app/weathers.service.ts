import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeathersService {
  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?id=4317656&appid=0286ab29f6b6de6fcbf7dea717998071&units=imperial');
  }
}
