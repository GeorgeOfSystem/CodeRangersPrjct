import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BusinessLayerService } from 'src/app/shared/services/business-layer.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
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
    console.log(this.element);
    //this.element == null ? this.router.navigate(["auditHome/audit-history"]) : "";
  }

  onCreate() {}

  ngOnDestroy() {
    this.b_Layer.currentElent = null;
    this.productUpDateSubs ? this.productUpDateSubs.unsubscribe() : "";
  }

  setStatus(status:string):void{
    this.element.estado = status;
    this.productUpDateSubs = this.b_Layer.updateProduct(this.element).subscribe(res => {
      // Object.entries(res);
      //this.router.navigate(["auditHome/audit-history"]);
    });
    
  }
}
