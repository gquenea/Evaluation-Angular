import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatServiceService } from '../stat-service.service';
@Component({
  selector: 'app-liste-stat',
  templateUrl: './liste-stat.component.html',
  styleUrls: ['./liste-stat.component.css'],
})
export class ListeStatComponent implements OnInit {
  tabStat: Statistique[];

  supprimer(index: Statistique) {
    let indexStat: number = this.tabStat.indexOf(index);
    this.tabStat.splice(indexStat, 1);
  }

  constructor(public singletonservice: StatServiceService) {
    this.tabStat = this.singletonservice.tabStat;
  }

  ngOnInit(): void {}
}
