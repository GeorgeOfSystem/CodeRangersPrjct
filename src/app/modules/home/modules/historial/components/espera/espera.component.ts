import { Component, OnInit } from "@angular/core";

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
  selector: "app-espera",
  templateUrl: "./espera.component.html",
  styleUrls: ["./espera.component.css"]
})
export class EsperaComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];

  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}
