import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../state';
import { Observable } from 'rxjs';
import { StatesComponent } from '../states/states.component';
import { Citie } from '../citie';

@Injectable()
export class StatesService {
  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string = 'https://brasilapi.com.br/api/ibge/uf/v1';
  selectedRegion: number; // Variável para armazenar a região selecionada
  UF: string;
  setUF(siglaUF: string): void {
    this.UF = siglaUF;
  }

  protected UrlServiceV2: string =
    'https://brasilapi.com.br/api/ibge/municipios/v1';

  setRegion(region: number): void {
    this.selectedRegion = region;
  }

  getStatesBySelectedRegion(): Observable<State[]> {
    return this.http.get<State[]>(
      `${this.UrlServiceV1}?regiao.id=${this.selectedRegion}`
    );
  }

  getCitiesByState(siglaUF: string): Observable<any> {
    return this.http.get<Citie>(
      `${this.UrlServiceV2}/${siglaUF}?providers=dados-abertos-br,gov,wikipedia`
    );
  }
  closeModalState() {
    const modal = document.getElementById('myModal')!;
    modal.classList.remove('show');
    modal.style.display = 'none';
  }
}
