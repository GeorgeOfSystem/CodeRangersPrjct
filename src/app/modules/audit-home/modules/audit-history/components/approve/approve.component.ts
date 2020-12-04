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
    name: "Spazio Calacoto",
    weight: "Gimnasio",
    symbol: "Aprobado",
    
  },
  { 
    position: 2, 
    name: "Go Achumani", 
    weight: "Gimnasio", 
    symbol: "Aprobado",
    
  },
  {
    position: 3,
    name: "Vainilla San Miguel",
    weight: "Café",
    symbol: "Aprobado",
    
  },
  {
    position: 4,
    name: "UPB Achocalla",
    weight: "Educación",
    symbol: "Aprobado",
    
  }
];

@Component({
  selector: 'approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss']
})
export class ApproveComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol","document"];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}
