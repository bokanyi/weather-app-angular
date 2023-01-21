import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(
      private http: HttpClient,
  ) { }

  getWeatherData(city: string): Observable<any> {
 
    let queryString = environment.baseUrl +`?q=${city}&units=metric&appid=` + environment.apiKey;

    return this.http.get(queryString);
  }
}
