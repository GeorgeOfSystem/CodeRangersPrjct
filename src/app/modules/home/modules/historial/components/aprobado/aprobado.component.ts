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
    name: "Spazio Calacoto",
    weight: "Gimnasio",
    symbol: "Aprobado"
  },
  { position: 2, name: "Go Achumani", weight: "Gimnasio", symbol: "Aprobado" },
  {
    position: 3,
    name: "Vainilla San Miguel",
    weight: "Café",
    symbol: "Aprobado"
  },
  {
    position: 4,
    name: "UPB Achocalla",
    weight: "Educación",
    symbol: "Aprobado"
  }
];

@Component({
  selector: "app-aprobado",
  templateUrl: "./aprobado.component.html",
  styleUrls: ["./aprobado.component.css"]
})
export class AprobadoComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}
}
