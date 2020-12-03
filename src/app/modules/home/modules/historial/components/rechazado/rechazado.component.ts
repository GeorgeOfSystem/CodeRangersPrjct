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
  displayedColumns: string[] = [
    "id",
    "sucursal",
    "negocio",
    "estado",
    "detalles",
    "delete"
  ];

  dataSource = ELEMENT_DATA;

  rechazados = [];
  rechazadoGetSubs: Subscription;
  rechazadoDeleteSubs: Subscription;
  constructor(
    private authService: AuthService,
    private historialService: HistorialService
  ) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct(): void {
    this.rechazados = [];
    const userId = this.authService.getUserId();
    this.rechazadoGetSubs = this.historialService
      .getProductsById(userId)
      .subscribe(res => {
        Object.entries(res).map((p: any) =>
          this.rechazados.push({ id: p[0], ...p[1] })
        );
      });
  }

  onDelete(id: any): void {
    this.rechazadoDeleteSubs = this.historialService
      .deleteProduct(id)
      .subscribe(
        res => {
          console.log("RESPONSE: ", res);
          this.loadProduct();
        },
        err => {
          console.log("ERROR: ");
        }
      );
  }

  ngOnDestroy() {
    this.rechazadoGetSubs ? this.rechazadoGetSubs.unsubscribe() : "";
  }
}
