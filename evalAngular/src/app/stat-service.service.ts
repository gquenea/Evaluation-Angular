import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';

@Injectable({
  providedIn: 'root',
})
export class StatServiceService {
  public tabStat: Statistique[] = [];
  constructor() {
    let meteoFrance: Statistique = new Statistique('10', 'meteo france', 20);
    let meteoItalie: Statistique = new Statistique('11', 'meteo Italie', 25);
    this.tabStat.push(meteoFrance, meteoItalie);
  }
}
