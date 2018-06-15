import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { TabsCalendarComponent } from './tabs-calendar/tabs-calendar.component';
import { WeatherNowComponent } from './weather-now/weather-now.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../services/weather.service';
import { HomeRoutingModule } from './home-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MarkersComponent } from './markers/markers.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule.forRoot(),
    HttpClientModule,
    TooltipModule.forRoot(),
    GooglePlaceModule,
    HomeRoutingModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    TabsCalendarComponent,
    WeatherNowComponent,
    MarkersComponent
  ],
  providers: [
    WeatherService
  ]
})
export class HomeModule { }
