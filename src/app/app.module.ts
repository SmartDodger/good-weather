import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsModule } from 'ngx-bootstrap';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { LoginComponent } from './header/login/login.component';
import { SearchComponent } from './search/search.component';
import { TabsCalendarComponent } from './tabs-calendar/tabs-calendar.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import {WeatherService} from './services/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    LoginComponent,
    SearchComponent,
    TabsCalendarComponent,
    HomeComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule.forRoot()
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
