import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeatherAPIService } from 'src/app/services/weather-api.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherAPIService]
})
export class WeatherComponent implements OnInit {
  city: string;
  paramsSubscription: any;
  weatherData: any;
  @ViewChild('') flecha!: ElementRef

  constructor(private weatherService: WeatherAPIService, private route: ActivatedRoute) {
    this.city = String('');
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.city = params['city'];
      this.getWeatherData(this.city);
    });
  }

  getWeatherData(city: string): void {
    this.weatherService.getWeather(this.city)
      .subscribe(data => {
        this.weatherData = data;
        this.formatData();
        });
  }

  formatData(){
    this.weatherData.wind.speed *= 3.6;
    this.weatherData.wind.speed = this.weatherData.wind.speed.toFixed(1);
    this.weatherData.main.temp = this.weatherData.main.temp.toFixed(1);
    this.weatherData.main.feels_like = this.weatherData.main.feels_like.toFixed(1);
    this.weatherData.main.temp_min = this.weatherData.main.temp_min.toFixed(1);
    this.weatherData.main.temp_max = this.weatherData.main.temp_max.toFixed(1);
  }
}
