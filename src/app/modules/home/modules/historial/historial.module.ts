import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from './historial.component';
import { HistorialRoutingModule } from './historial-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HistorialRoutingModule
  ],
  declarations: [HistorialComponent]
})
export class HistorialModule { }