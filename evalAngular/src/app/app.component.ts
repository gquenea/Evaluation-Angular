import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'evalAngular';
  public tabStat: Statistique[] = [];

  constructor() {
    let meteoFrance: Statistique = new Statistique('10', 'meteo france', 20);
    let meteoItalie: Statistique = new Statistique('11', 'meteo Italie', 25);
    this.tabStat.push(meteoFrance, meteoItalie);
    setTimeout(() => {
      this.tabStat.push(new Statistique('12', 'meteo Allemagne', 23));
    }, 5000);
  }
}
