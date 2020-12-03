import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditHomeRoutingModule } from './audit-home-routing.module';
import { AuditHomeComponent } from './audit-home.component';

@NgModule({
  imports: [CommonModule, AuditHomeRoutingModule],
  declarations: [AuditHomeComponent]
})
export class AuditHomeModule { }
