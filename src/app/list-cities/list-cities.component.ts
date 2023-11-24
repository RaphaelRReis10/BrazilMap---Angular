import { Component, Input } from '@angular/core';
import { Citie } from '../citie';
import { StatesService } from '../services/states.service';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.css'],
})
export class ListCitiesComponent {
  @Input() cities: Citie[];
  public state: string;

  constructor(private stateService: StatesService) {}

  getCitiesForState(siglaUF: string) {
    this.stateService.getCitiesByState(siglaUF).subscribe((cities) => {
      this.cities = cities;
      //console.log(cities);
    });
  }
}
