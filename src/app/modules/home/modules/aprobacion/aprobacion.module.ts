import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AprobacionComponent } from "./aprobacion.component";
import { AprobacionRoutingModule } from "./aprobacion-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
<<<<<<< HEAD
import { FormulariosService } from "../../../../shared/services/formularios.service";
import { HistorialService } from "../../../../shared/services/historial.service";
import { CKEditorModule } from "ng2-ckeditor";
=======
import { CKEditorModule } from "ng2-ckeditor";
import { BusinessLayerService } from 'src/app/shared/services/business-layer.service';
>>>>>>> upstream/pr/11

@NgModule({
  imports: [
    CommonModule,
    AprobacionRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  declarations: [AprobacionComponent],
<<<<<<< HEAD
  providers: [FormulariosService, HistorialService]
=======
  providers: [BusinessLayerService]
>>>>>>> upstream/pr/11
})
export class AprobacionModule {}
