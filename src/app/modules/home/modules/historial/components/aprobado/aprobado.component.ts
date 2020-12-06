import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
<<<<<<< HEAD
import { AuthService } from "../../../../../../shared/services/auth.service";
import { HistorialService } from "../../../../../../shared/services/historial.service";
=======
import { BusinessLayerService } from 'src/app/shared/services/business-layer.service';
import { AuthService } from "../../../../../../shared/services/auth.service";
>>>>>>> upstream/pr/11

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
<<<<<<< HEAD
    private historialService: HistorialService
=======
    private b_Layer: BusinessLayerService
>>>>>>> upstream/pr/11
  ) {}

  ngOnInit() {
    this.loadProduct();
    this.dataSource = this.aprobados;
  }

  loadProduct(): void {
    this.aprobados = [];
    const userId = this.authService.getUserId();
<<<<<<< HEAD
    this.aprobadoGetSubs = this.historialService
      .getProductsById(userId)
=======
    this.aprobadoGetSubs = this.b_Layer
      .getProductsByIdBase(userId,"historial")
>>>>>>> upstream/pr/11
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
<<<<<<< HEAD
    this.aprobadoDeleteSubs = this.historialService.deleteProduct(id).subscribe(
=======
    this.aprobadoDeleteSubs = this.b_Layer.deleteProductBase(id,"historial").subscribe(
>>>>>>> upstream/pr/11
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
<<<<<<< HEAD
    this.aprobadoDeleteSubs ? this.aprobadoDeleteSubs.unsubscribe() : "";
=======
    //this.aprobadoDeleteSubs ? this.aprobadoDeleteSubs.unsubscribe() : "";
>>>>>>> upstream/pr/11
  }
}
