import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './view/main/main.component';
import { WeatherComponent } from './components/weather/weather.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { FreshStartComponent } from './view/fresh-start/fresh-start.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    WeatherComponent,
    PageNotFoundComponent,
    FreshStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
