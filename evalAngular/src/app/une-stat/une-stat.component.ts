import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-une-stat',
  templateUrl: './une-stat.component.html',
  styleUrls: ['./une-stat.component.css'],
})
export class UneStatComponent implements OnInit {
  @Input() public uneStat!: Statistique;
  @Output() Asupprimer = new EventEmitter();

  delete() {
    this.Asupprimer.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
