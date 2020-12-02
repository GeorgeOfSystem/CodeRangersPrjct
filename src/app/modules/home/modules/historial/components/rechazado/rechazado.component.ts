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
    name: "Iglesia San Miguel",
    weight: "Religión",
    symbol: "Rechazado"
  },
  {
    position: 2,
    name: "MegaCenter Irpavi",
    weight: "Cine",
    symbol: "Rechazado"
  }
];

@Component({
  selector: "app-rechazado",
  templateUrl: "./rechazado.component.html",
  styleUrls: ["./rechazado.component.css"]
})
export class RechazadoComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];

  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}
