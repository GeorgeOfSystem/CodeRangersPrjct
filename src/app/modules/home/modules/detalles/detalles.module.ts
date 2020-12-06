import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesRoutingModule } from './detalles-routing.module';
import { DetallesComponent } from './detalles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [DetallesComponent],
  imports: [
    CommonModule,
    DetallesRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class DetallesModule { }
