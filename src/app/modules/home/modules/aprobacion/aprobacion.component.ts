import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
<<<<<<< HEAD
import { AuthService } from "../../../../shared/services/auth.service";
import { FormulariosService } from "../../../../shared/services/formularios.service";
import { HistorialService } from "../../../../shared/services/historial.service";
=======
import { BusinessLayerService } from 'src/app/shared/services/business-layer.service';
import { AuthService } from "../../../../shared/services/auth.service";
>>>>>>> upstream/pr/11

@Component({
  selector: "app-aprobacion",
  templateUrl: "./aprobacion.component.html",
  styleUrls: ["./aprobacion.component.css"]
})
export class AprobacionComponent implements OnInit, OnDestroy {
  formularioForm: FormGroup;
<<<<<<< HEAD
  formularioSubs: Subscription;
=======
  b_LayerSubs: Subscription;
>>>>>>> upstream/pr/11
  historialForm: FormGroup;
  historialSubs: Subscription;
  ckeditorContent;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
<<<<<<< HEAD
    private formularioService: FormulariosService,
    private historialService: HistorialService,
=======
    private b_Layer: BusinessLayerService,
>>>>>>> upstream/pr/11
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
<<<<<<< HEAD
      estado: ""
=======
      estado: "",
      respuesta: ""
>>>>>>> upstream/pr/11
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
<<<<<<< HEAD
    this.formularioSubs = this.formularioService
      .addProduct({
=======
    this.b_LayerSubs = this.b_Layer
      .addProductBase({
>>>>>>> upstream/pr/11
        ...this.formularioForm.value,
        ownerId: this.authService.getUserId(),
        estado: "En Espera",
        propuesta: this.ckeditorContent
<<<<<<< HEAD
      })
      .subscribe(
        res => {
          console.log("Resp: ", res);
          this.historialSubs = this.historialService
            .addProduct({
=======
      },"formularios")
      .subscribe(
        res => {
          console.log("Resp: ", res);
          this.historialSubs = this.b_Layer
            .addProductBase({
>>>>>>> upstream/pr/11
              sucursal: this.formularioForm.value.direccion,
              negocio: this.formularioForm.value.negocio,
              estado: "En Espera",
              ownerId: this.authService.getUserId()
<<<<<<< HEAD
            })
=======
            },"historial")
>>>>>>> upstream/pr/11
            .subscribe(
              res => {
                console.log("Resp: ", res);
              },
              err => {
                console.log("Error de servidor");
              }
            );
          this.router.navigate(["historial"]);
        },
        err => {
          console.log("Error de servidor");
        }
      );
  }
  ngOnDestroy() {
<<<<<<< HEAD
    this.formularioSubs ? this.formularioSubs.unsubscribe() : "";
    this.historialSubs ? this.historialSubs.unsubscribe() : "";
=======
    this.b_LayerSubs ? this.b_LayerSubs.unsubscribe() : "";
>>>>>>> upstream/pr/11
  }
}
