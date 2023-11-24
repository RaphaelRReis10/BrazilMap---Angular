import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './nav/menu/menu.component';
import { HomeComponent } from './nav/home/home.component';
import { FooterComponent } from './nav/footer/footer.component';
import { NorthComponent } from './regions/north/north.component';
import { NortheastComponent } from './regions/northeast/northeast.component';
import { CentralwestComponent } from './regions/centralwest/centralwest.component';
import { SoutheastComponent } from './regions/southeast/southeast.component';
import { SouthComponent } from './regions/south/south.component';
import { StatesComponent } from './states/states.component';
import { StatesService } from './services/states.service';
import { ListCitiesComponent } from './list-cities/list-cities.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NorthComponent,
    NortheastComponent,
    CentralwestComponent,
    SoutheastComponent,
    SouthComponent,
    StatesComponent,
    ListCitiesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [StatesService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
