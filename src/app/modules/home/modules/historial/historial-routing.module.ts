import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HistorialComponent } from "./historial.component";

const routes: Routes = [
  { path: "", component: HistorialComponent },
  {
    path: "detalle",
    loadChildren: () =>
      import("./modules/detalle/detalle.module").then(m => m.DetalleModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialRoutingModule {}
