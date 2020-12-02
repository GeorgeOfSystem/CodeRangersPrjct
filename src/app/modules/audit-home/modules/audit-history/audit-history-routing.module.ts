import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditHistoryComponent } from './audit-history.component';

const routes: Routes = [{ path: "", component: AuditHistoryComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditHistoryRoutingModule { }
