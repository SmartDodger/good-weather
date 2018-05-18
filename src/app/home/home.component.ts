import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { fadeComponentAnimation } from '../animations/animation-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {

  }
}

