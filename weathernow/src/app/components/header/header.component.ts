import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherAPIService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 

  constructor(private router: Router, private weatherService: WeatherAPIService) {}
  
  onClickSubmit(data: any) {
    this.router.navigate(['/showWeather', data.city]);
  }
}
