import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BusinessLayerService } from 'src/app/shared/services/business-layer.service';

@Component({
  selector: 'app-audit-approve',
  templateUrl: './audit-approve.component.html',
  styleUrls: ['./audit-approve.component.scss']
})
export class AuditApproveComponent implements OnInit {
  element;
  prueba = "prueba";
  productUpDateSubs: Subscription;
  historialForm: FormGroup;
  historialSubs: Subscription;
  ckeditorContent;

  constructor(
    //private formBuilder: FormBuilder,
    //private authService: AuthService,
    private b_Layer: BusinessLayerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.element = this.b_Layer.currentElent;
    this.element == null ? this.router.navigate(["auditHome/audit-history"]) : "";
  }

  onCreate() {}

  ngOnDestroy() {
    this.b_Layer.setCurrentElement(null);
    this.productUpDateSubs ? this.productUpDateSubs.unsubscribe() : "";
  }

  setStatus(status:string):void{
    this.element.estado = status;
    this.productUpDateSubs = this.b_Layer.updateProduct(this.element).subscribe(res => {
      Object.entries(res);
    })
    this.router.navigate(["auditHome/audit-history"]);
  }
}
