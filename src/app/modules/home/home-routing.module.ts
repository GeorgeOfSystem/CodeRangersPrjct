import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "historial",
        loadChildren: () =>
          import("./modules/historial/historial.module").then(
            m => m.HistorialModule
          )
      },
      {
        path: "aprobacion",
        loadChildren: () =>
          import("./modules/aprobacion/aprobacion.module").then(
            m => m.AprobacionModule
          )
      },
      {
        path: "perfil",
        loadChildren: () =>
          import("./modules/perfil/perfil.module").then(m => m.PerfilModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
