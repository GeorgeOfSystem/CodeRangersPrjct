import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BusinessLayerService } from 'src/app/shared/services/business-layer.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

@Component({
  selector: 'approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss']
})
export class ApproveComponent implements OnInit {
  products = [];
  productGetSubs: Subscription;
  displayedColumns: string[];
  dataSource;
  constructor( private b_Layer: BusinessLayerService) {}

  ngOnInit() {
    this.products = [];
    this.productGetSubs = this.b_Layer.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      this.displayedColumns = ["ownerId", "nombre", "negocio", "estado","document"];
      this.dataSource = this.products.filter( s => s.estado == "Aprobado" );
    });
  }
}
