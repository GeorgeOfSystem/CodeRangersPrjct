import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Subscription } from "rxjs";
import { BusinessLayerService } from 'src/app/shared/services/business-layer.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

@Component({
  selector: "app-detalles",
  templateUrl: "./detalles.component.html",
  styleUrls: ["./detalles.component.scss"]
})
export class DetallesComponent implements OnInit {
    element;
    productUpDateSubs: Subscription;
    historialSubs: Subscription;
    ckeditorContent;
  
    constructor(
      private b_Layer: BusinessLayerService,
      private router: Router
    ) {}
  
    ngOnInit() {
      this.element = this.b_Layer.currentElent;
      //this.element == null ? this.router.navigate(["auditHome/audit-history"]) : "";
    }
  
    onCreate() {}
  
    ngOnDestroy() {
      this.b_Layer.currentElent=null;
      this.productUpDateSubs ? this.productUpDateSubs.unsubscribe() : "";
    }
  
    /*setStatus(status:string):void{
      this.element.estado = status;
      this.productUpDateSubs = this.b_Layer.updateProduct(this.element).subscribe(res => {
        Object.entries(res);
      })
      this.router.navigate(["auditHome/audit-history"]);
    }*/
}