import { Component, ViewChild } from '@angular/core';
import { StatesComponent } from 'src/app/states/states.component';
import { StatesService } from '../../services/states.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  static closeModal() {
    throw new Error('Method not implemented.');
  }
  @ViewChild(StatesComponent) private statesComponent: StatesComponent;
  public modalTitle: string = '';

  constructor(private stateService: StatesService) {}

  public regionName: string[] = [
    'North',
    'Northeast',
    'Sutheast',
    'South',
    'Central-West',
  ];

  openModal(region: number): void {
    this.modalTitle = this.regionName[region - 1];
    this.stateService.setRegion(region);
    this.statesComponent.ngOnInit(this.stateService.selectedRegion);

    const modal = document.getElementById('myModal')!;
    modal.classList.add('show');
    modal.style.display = 'block';
  }

  closeModal(): void {
    this.stateService.closeModalState();
  }
}
