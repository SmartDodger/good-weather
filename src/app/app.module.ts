import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsModule } from 'ngx-bootstrap';
import { SearchComponent } from './search/search.component';
import { TabsCalendarComponent } from './tabs-calendar/tabs-calendar.component';
import { HomeComponent } from './home/home.component';
import { WeatherService } from './services/weather.service';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    TabsCalendarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    FormsModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    [GooglePlaceModule, BrowserModule, FormsModule]
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
