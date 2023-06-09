import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { FreshStartComponent } from './view/fresh-start/fresh-start.component';

const routes: Routes = [
  { path: 'showWeather/:city', component: WeatherComponent },
  { path: '',   component: FreshStartComponent } ,
  { path: 'showWeather',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
