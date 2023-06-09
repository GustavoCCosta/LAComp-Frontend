import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  private apiKey = environment.API_KEY;
  private apiUrl = environment.API_URL;
  private apiUnits = environment.API_UNITS;
  private apiLang = environment.API_LANG;

  constructor(private http: HttpClient) { }

  getWeather(cityLoc: any): Observable<any> {
    const url = `${this.apiUrl}?q=${cityLoc}&appid=${this.apiKey}&units=${this.apiUnits}&lang=${this.apiLang}`;
    return this.http.get(url);
  }
}