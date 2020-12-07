import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { BusinessLayerService } from 'src/app/shared/services/business-layer.service';
import { AuthService } from "../../../../shared/services/auth.service";

@Component({
  selector: "app-aprobacion",
  templateUrl: "./aprobacion.component.html",
  styleUrls: ["./aprobacion.component.css"]
})
export class AprobacionComponent implements OnInit, OnDestroy {
  formularioForm: FormGroup;
  b_LayerSubs: Subscription;
  historialForm: FormGroup;
  historialSubs: Subscription;
  ckeditorContent;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private b_Layer: BusinessLayerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formularioForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      negocio: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      requisitos: ["", [Validators.required]],
      propuesta: "",
      ownerId: "",
      estado: "",
      respuesta: ""
    });
    this.historialForm = this.formBuilder.group({
      sucursal: "",
      negocio: "",
      estado: "",
      ownerId: ""
    });
  }

  onCreate() {
    console.log("Form group: ", this.formularioForm.value);
    this.b_LayerSubs = this.b_Layer
      .addProduct({
        ...this.formularioForm.value,
        ownerId: this.authService.getUserId(),
        estado: "En Espera",
        propuesta: this.ckeditorContent
      })
      .subscribe(
        res => {
          console.log("Resp: ", res);
          // this.historialSubs = this.b_Layer
          //   .addProduct({
          //     sucursal: this.formularioForm.value.direccion,
          //     negocio: this.formularioForm.value.negocio,
          //     estado: "En Espera",
          //     ownerId: this.authService.getUserId()
          //   })
          //   .subscribe(
          //     res => {
          //       console.log("Resp: ", res);
          //     },
          //     err => {
          //       console.log("Error de servidor");
          //     }
          //   );
          this.router.navigate(["/home/historial"]);
        },
        err => {
          console.log("Error de servidor");
        }
      );
  }
  ngOnDestroy() {
    this.b_LayerSubs ? this.b_LayerSubs.unsubscribe() : "";
  }
}
