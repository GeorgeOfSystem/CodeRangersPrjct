import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../../../../../../shared/services/auth.service";
import { HistorialService } from "../../../../../../shared/services/historial.service";

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
  displayedColumns: string[] = [
    "id",
    "sucursal",
    "negocio",
    "estado",
    "detalles",
    "delete"
  ];

  dataSource = ELEMENT_DATA;

  espera = [];
  esperaGetSubs: Subscription;
  esperaDeleteSubs: Subscription;
  constructor(
    private authService: AuthService,
    private historialService: HistorialService
  ) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct(): void {
    this.espera = [];
    const userId = this.authService.getUserId();
    this.esperaGetSubs = this.historialService
      .getProductsById(userId)
      .subscribe(res => {
        Object.entries(res).map((p: any) => {
          if (p[1].estado == "En Espera") {
            this.espera.push({ id: p[0], ...p[1] });
          }
        });
      });
  }

  onDelete(id: any): void {
    this.esperaDeleteSubs = this.historialService.deleteProduct(id).subscribe(
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
    this.esperaGetSubs ? this.esperaGetSubs.unsubscribe() : "";
    this.esperaDeleteSubs ? this.esperaDeleteSubs.unsubscribe() : "";
  }
}
