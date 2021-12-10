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

  constructor(public singletonservice: StatServiceService) {
    this.tabStat = this.singletonservice.tabStat;
  }
}
