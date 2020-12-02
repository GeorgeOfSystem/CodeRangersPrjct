import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistorialComponent } from "./historial.component";
import { HistorialRoutingModule } from "./historial-routing.module";
import { MatTabsModule } from "@angular/material/tabs";
import { AprobadoComponent } from "./components/aprobado/aprobado.component";
import { EsperaComponent } from "./components/espera/espera.component";
import { RechazadoComponent } from "./components/rechazado/rechazado.component";

@NgModule({
  imports: [CommonModule, HistorialRoutingModule, MatTabsModule],
  declarations: [
    HistorialComponent,
    AprobadoComponent,
    EsperaComponent,
    RechazadoComponent
  ]
})
export class HistorialModule {}
