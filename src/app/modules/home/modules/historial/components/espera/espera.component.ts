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

  espera = [];
  dataSource = [];
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
            this.dataSource = this.espera;
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
