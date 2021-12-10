import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-une-stat',
  templateUrl: './une-stat.component.html',
  styleUrls: ['./une-stat.component.css'],
})
export class UneStatComponent implements OnInit {
  @Input() public uneStat!: Statistique;

  constructor() {
    let meteoFrance: Statistique = new Statistique('10', 'meteo france', 20);
    let meteoItalie: Statistique = new Statistique('11', 'meteo Italie', 25);
  }

  ngOnInit(): void {}
}
