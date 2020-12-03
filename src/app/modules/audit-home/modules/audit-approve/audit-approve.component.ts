import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-audit-approve',
  templateUrl: './audit-approve.component.html',
  styleUrls: ['./audit-approve.component.scss']
})
export class AuditApproveComponent implements OnInit {
  formularioForm: FormGroup;
  formularioSubs: Subscription;
  historialForm: FormGroup;
  historialSubs: Subscription;
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
      propuesta: ["", [Validators.required]],
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
    console.log("Form group: ", this.formularioForm.value);
    /*this.formularioSubs = this.formularioService
      .addProduct({
        ...this.formularioForm.value,
        ownerId: this.authService.getUserId(),
        estado: "En Espera"
      })
      .subscribe(
        res => {
          console.log("Resp: ", res);
        },
        err => {
          console.log("Error de servidor");
        }
      );*/
    /*this.historialSubs = this.historialService
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
      );*/
  }
  ngOnDestroy() {
    this.formularioSubs ? this.formularioSubs.unsubscribe() : "";
    this.historialSubs ? this.historialSubs.unsubscribe() : "";
  }
  
}
