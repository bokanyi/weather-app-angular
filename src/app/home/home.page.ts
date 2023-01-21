import { Component } from '@angular/core';
import { response } from 'express';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
[x: string]: any;
  
  Math = Math
  public res: any;

  public city: string = 'Budapest';

  constructor(
          private weatherApi: WeatherService 
  ) {}

  ngOnInit(){
    this.getWeatherData();
    this.city = ''
    // this.switchColorTheme()
    // document.body.setAttribute('color-theme', 'dark')
  }

  getWeatherData() {
    this.weatherApi.getWeatherData(this.city).subscribe((response)=> {
      this.res = response;
      console.log(this.res)
      this.switchColorTheme()
    });
  }

  onSubmit() {
    console.log("submitted")
    this.getWeatherData();
    this.city = ''
    // this.switchColorTheme()
  }

  switchColorTheme () {
    if(this.res.list[0].sys.pod==="n"){
      console.log(this.res.list[0].sys.pod)
      document.body.setAttribute('class', 'dark')
      }else{
        console.log(this.res.list[0].sys.pod)
        document.body.setAttribute('class', 'light')
      }

  }


}
