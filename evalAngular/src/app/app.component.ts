import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatServiceService } from './stat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'evalAngular';
  public tabStat: Statistique[] = [];

  supprimer(index: Statistique) {
    let indexStat: number = this.tabStat.indexOf(index);
    this.tabStat.splice(indexStat, 1);
  }

  constructor(public singletonservice: StatServiceService) {
    this.tabStat = this.singletonservice.tabStat;
  }
}
