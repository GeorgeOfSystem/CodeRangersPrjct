import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: "Pizza Steve Achumani",
    weight: "Restaurante",
    symbol: "Rechazado"
  },
  {
    position: 2,
    name: "Pizza Steve San Miguel",
    weight: "Restaurante",
    symbol: "Rechazado"
  },
  {
    position: 3,
    name: "Bonsu Cota Cota",
    weight: "Restaurante",
    symbol: "Rechazado"
  }
];

@Component({
  selector: 'waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol","document"];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}
