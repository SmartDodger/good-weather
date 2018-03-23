import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import {TabsCalendarComponent} from './tabs-calendar/tabs-calendar.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: 'fiveDays',
    component: TabsCalendarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

