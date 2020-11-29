import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AprobacionComponent } from "./aprobacion.component";
import { AprobacionRoutingModule } from "./aprobacion-routing.module";

@NgModule({
  imports: [CommonModule, AprobacionRoutingModule],
  declarations: [AprobacionComponent]
})
export class AprobacionModule {}
