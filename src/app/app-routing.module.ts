import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NorthComponent } from './regions/north/north.component';
import { HomeComponent } from './nav/home/home.component';
import { NortheastComponent } from './regions/northeast/northeast.component';
import { CentralwestComponent } from './regions/centralwest/centralwest.component';
import { SouthComponent } from './regions/south/south.component';
import { SoutheastComponent } from './regions/southeast/southeast.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'north', component: NorthComponent },
  { path: 'northeast', component: NortheastComponent },
  { path: 'centralwest', component: CentralwestComponent },
  { path: 'southeast', component: SoutheastComponent },
  { path: 'south', component: SouthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
