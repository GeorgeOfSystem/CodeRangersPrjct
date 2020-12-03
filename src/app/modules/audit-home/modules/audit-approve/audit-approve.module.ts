import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditApproveRoutingModule } from './audit-approve-routing.module';
import { AuditApproveComponent } from './audit-approve.component';

@NgModule({
  declarations: [AuditApproveComponent],
  imports: [
    CommonModule,
    AuditApproveRoutingModule
  ]
})
export class AuditApproveModule { }
