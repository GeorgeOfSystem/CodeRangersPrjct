import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditApproveRoutingModule } from './audit-approve-routing.module';
import { AuditApproveComponent } from './audit-approve.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuditHistoryModule } from '../audit-history/audit-history.module';
import { AuditHomeComponent } from '../../audit-home.component';
import { AuditHistoryComponent } from '../audit-history/audit-history.component';

@NgModule({
  declarations: [AuditApproveComponent],
  imports: [
    CommonModule,
    AuditApproveRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AuditApproveModule { }
