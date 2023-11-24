import { Component, ViewChild } from '@angular/core';
import { State } from '../state';
import { StatesService } from '../services/states.service';
import { Citie } from '../citie';
import { ListCitiesComponent } from '../list-cities/list-cities.component';
import { HomeComponent } from '../nav/home/home.component';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css'],
})
export class StatesComponent {
  @ViewChild(ListCitiesComponent)
  private listCitiesComponent: ListCitiesComponent;
  regionId: number;
  isCityModalOpen: boolean = false;
  public modalTitleC: string = '';
  constructor(private stateService: StatesService) {}

  public states: State[]; // array de estados
  public cities: Citie[];
  ngOnInit(regionId: number): void {
    this.stateService.getStatesBySelectedRegion().subscribe({
      next: (states) => {
        this.states = states.filter((estado) => estado.regiao.id === regionId);
      },
      error: (e) => console.log(e),
    });
  }

  openModalCities(siglaUF: string) {
    //this.stateService.closeModalState();
    this.modalTitleC = this.stateService.UF;
    this.listCitiesComponent.getCitiesForState(siglaUF);

    const modal = document.getElementById('myModalCities')!;
    modal.classList.add('show');
    modal.style.display = 'block';
  }
}
