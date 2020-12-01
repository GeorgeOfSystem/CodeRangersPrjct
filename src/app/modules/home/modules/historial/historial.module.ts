import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistorialComponent } from "./historial.component";
import { HistorialRoutingModule } from "./historial-routing.module";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  imports: [CommonModule, HistorialRoutingModule, MatTabsModule],
  declarations: [HistorialComponent]
})
export class HistorialModule {}
