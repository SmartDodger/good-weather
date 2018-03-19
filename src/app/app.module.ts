import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsModule } from 'ngx-bootstrap';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { LoginComponent } from './header/login/login.component';
import { SearchComponent } from './search/search.component';
import { TabsCalendarComponent } from './tabs-calendar/tabs-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    LoginComponent,
    SearchComponent,
    TabsCalendarComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
