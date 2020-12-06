import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { BusinessLayerService } from 'src/app/shared/services/business-layer.service';
import { AuthService } from "../../../../../../shared/services/auth.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

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

  rechazados = [];
  dataSource = [];
  rechazadoGetSubs: Subscription;
  rechazadoDeleteSubs: Subscription;
  constructor(
    private authService: AuthService,
    private b_Layer: BusinessLayerService
  ) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct(): void {
    this.rechazados = [];
    const userId = this.authService.getUserId();
    this.rechazadoGetSubs = this.b_Layer
      .getProductsByIdBase(userId,"historial")
      .subscribe(res => {
        Object.entries(res).map((p: any) => {
          if (p[1].estado == "Rechazado") {
            this.rechazados.push({ id: p[0], ...p[1] });
            this.dataSource = this.rechazados;
          }
        });
      });
  }

  onDelete(id: any): void {
    this.rechazadoDeleteSubs = this.b_Layer
      .deleteProductBase(id,"historial")
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
