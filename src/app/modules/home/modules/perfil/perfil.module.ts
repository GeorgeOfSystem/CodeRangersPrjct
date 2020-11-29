import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfilComponent } from "./perfil.component";
import { PerfilRoutingModule } from "./perfil-routing.module";

@NgModule({
  imports: [CommonModule, PerfilRoutingModule],
  declarations: [PerfilComponent]
})
export class PerfilModule {}
