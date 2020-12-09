import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditApproveComponent } from './audit-approve.component';

const routes: Routes = [{ path: "", component: AuditApproveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditApproveRoutingModule { }