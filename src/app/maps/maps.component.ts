import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {

  }

}


