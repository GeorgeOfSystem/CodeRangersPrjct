import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", redirectTo: "inicio", pathMatch: "full" },
      {
        path: "inicio",
        loadChildren: () =>
          import("./modules/inicio/inicio.module").then(m => m.InicioModule)
      },
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
      },
      {
        path: "detalles",
        loadChildren: () =>
          import("./modules/detalles/detalles.module").then(m => m.DetallesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
