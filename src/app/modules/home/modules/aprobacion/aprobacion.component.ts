import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../../../../shared/services/auth.service";
/*import { FormulariosService } from "../../../../shared/services/formularios.service";
import { HistorialService } from "../../../../shared/services/historial.service";*/

@Component({
  selector: "app-aprobacion",
  templateUrl: "./aprobacion.component.html",
  styleUrls: ["./aprobacion.component.css"]
})
export class AprobacionComponent implements OnInit, OnDestroy {
  formularioForm: FormGroup;
  formularioSubs: Subscription;
  historialForm: FormGroup;
  historialSubs: Subscription;
  ckeditorContent;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    /*private formularioService: FormulariosService,
    private historialService: HistorialService*/
  ) {}

  ngOnInit() {
    this.formularioForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      negocio: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      requisitos: ["", [Validators.required]],
      propuesta: "",
      ownerId: "",
      estado: ""
    });
    this.historialForm = this.formBuilder.group({
      sucursal: "",
      negocio: "",
      estado: "",
      ownerId: ""
    });
  }
  
  onCreate() {
    /*console.log("Form group: ", this.formularioForm.value);
    this.formularioSubs = this.formularioService
      .addProduct({
        ...this.formularioForm.value,
        ownerId: this.authService.getUserId(),
        estado: "En Espera",
        propuesta: this.ckeditorContent
      })
      .subscribe(
        res => {
          console.log("Resp: ", res);
          this.historialSubs = this.historialService
            .addProduct({
              sucursal: this.formularioForm.value.direccion,
              negocio: this.formularioForm.value.negocio,
              estado: "En Espera",
              ownerId: this.authService.getUserId()
            })
            .subscribe(
              res => {
                console.log("Resp: ", res);
              },
              err => {
                console.log("Error de servidor");
              }
            );
        },
        err => {
          console.log("Error de servidor");
        }
      );*/
  }
  ngOnDestroy() {
    /*this.formularioSubs ? this.formularioSubs.unsubscribe() : "";
    this.historialSubs ? this.historialSubs.unsubscribe() : "";*/
  }
}
