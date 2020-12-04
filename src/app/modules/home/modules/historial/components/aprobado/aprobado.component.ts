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
  selector: "app-aprobado",
  templateUrl: "./aprobado.component.html",
  styleUrls: ["./aprobado.component.css"]
})
export class AprobadoComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "sucursal",
    "negocio",
    "estado",
    "detalles",
    "delete"
  ];

  aprobados = [];
  dataSource = [];
  aprobadoGetSubs: Subscription;
  aprobadoDeleteSubs: Subscription;

  constructor(
    private authService: AuthService,
    private historialService: HistorialService
  ) {}

  ngOnInit() {
    this.loadProduct();
    this.dataSource = this.aprobados;
  }

  loadProduct(): void {
    this.aprobados = [];
    const userId = this.authService.getUserId();
    this.aprobadoGetSubs = this.historialService
      .getProductsById(userId)
      .subscribe(res => {
        Object.entries(res).map((p: any) => {
          if (p[1].estado == "aprobado") {
            this.aprobados.push({ id: p[0], ...p[1] });
            this.dataSource = this.aprobados;
          }
        });
      });
  }

  onDelete(id: any): void {
    this.aprobadoDeleteSubs = this.historialService.deleteProduct(id).subscribe(
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
    this.aprobadoGetSubs ? this.aprobadoGetSubs.unsubscribe() : "";
    this.aprobadoDeleteSubs ? this.aprobadoDeleteSubs.unsubscribe() : "";
  }
}
