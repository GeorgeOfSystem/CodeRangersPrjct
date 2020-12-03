import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../../../../../../../shared/services/auth.service";
import { HistorialService } from "../../../../../../../shared/services/historial.service";

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

  aprobados = [];
  aprobadoGetSubs: Subscription;
  constructor(
    private authService: AuthService,
    private historialService: HistorialService
  ) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct(): void {
    this.aprobados = [];
    const userId = this.authService.getUserId();
    this.aprobadoGetSubs = this.historialService
      .getProductsById(userId)
      .subscribe(res => {
        Object.entries(res).map((p: any) =>
          this.aprobados.push({ id: p[0], ...p[1] })
        );
      });
  }
  ngOnDestroy() {
    this.aprobadoGetSubs ? this.aprobadoGetSubs.unsubscribe() : "";
  }
}
