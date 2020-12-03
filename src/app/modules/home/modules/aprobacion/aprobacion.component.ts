import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../../../../../shared/services/auth.service";
import { FormulariosService } from "../../../../../shared/services/formularios.service";

@Component({
  selector: "app-aprobacion",
  templateUrl: "./aprobacion.component.html",
  styleUrls: ["./aprobacion.component.css"]
})
export class AprobacionComponent implements OnInit, OnDestroy {
  formularioForm: FormGroup;
  formularioSubs: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private formularioService: FormulariosService
  ) {}

  ngOnInit() {
    this.formularioForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      negocio: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      requisitos: ["", [Validators.required]],
      propuesta: ["", [Validators.required]],
      ownerId: ""
    });
  }

  onCreate() {
    console.log("Form group: ", this.formularioForm.value);
    this.formularioSubs = this.formularioService
      .addProduct({
        ...this.formularioForm.value,
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
  }
  ngOnDestroy() {
    this.formularioSubs ? this.formularioSubs.unsubscribe() : "";
  }
}
