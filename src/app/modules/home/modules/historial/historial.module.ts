import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistorialComponent } from "./historial.component";
import { HistorialRoutingModule } from "./historial-routing.module";
import { EsperaComponent } from "./components/espera/espera.component";
import { AprobadoComponent } from "./components/aprobado/aprobado.component";
import { RechazadoComponent } from "./components/rechazado/rechazado.component";

@NgModule({
  imports: [CommonModule, HistorialRoutingModule],
  declarations: [
    HistorialComponent,
    AprobadoComponent,
    EsperaComponent,
    RechazadoComponent
  ]
})
export class HistorialModule {}
