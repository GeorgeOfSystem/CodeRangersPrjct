import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AprobacionComponent } from "./aprobacion.component";
import { AprobacionRoutingModule } from "./aprobacion-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CKEditorModule } from "ng2-ckeditor";
import { BusinessLayerService } from 'src/app/shared/services/business-layer.service';

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
  providers: [BusinessLayerService]
})
export class AprobacionModule {}
