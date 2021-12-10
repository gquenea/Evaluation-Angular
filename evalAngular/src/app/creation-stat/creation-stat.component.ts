import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Statistique } from '../models/statistique';
import { StatServiceService } from '../stat-service.service';

@Component({
  selector: 'app-creation-stat',
  templateUrl: './creation-stat.component.html',
  styleUrls: ['./creation-stat.component.css'],
})
export class CreationStatComponent implements OnInit {
  public identifiant!: string;
  public titre!: string;
  public valeur!: number;
  creerStatistique(monForm: NgForm) {
    let nouvelleStatistique = new Statistique(
      this.identifiant,
      this.titre,
      this.valeur
    );
    this.singletonservice.tabStat.push(nouvelleStatistique);
  }
  constructor(private singletonservice: StatServiceService) {}
  ngOnInit(): void {}
}
