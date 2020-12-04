import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetalleComponent } from "./detalle.component";
import { DetalleRoutingModule } from "./detalle-routing.module";

@NgModule({
  imports: [CommonModule, DetalleRoutingModule],
  declarations: [DetalleComponent]
})
export class DetalleModule {}
