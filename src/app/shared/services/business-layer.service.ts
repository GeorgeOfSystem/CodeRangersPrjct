import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { DataLayerService } from "./data-layer.service";
import { environment } from '../../../environments/environment';

@Injectable()
export class BusinessLayerService {
  currentElent;
  url = environment.app.apiBaseUrl;
  productGetSubs: Subscription;
  products = []

  constructor(private http: HttpClient, private data: DataLayerService) {}

  //Create - Add form to the database
  public addProduct(mensaje: any): Observable<any> {
    var isRepet = true;
    this.products = [];
    this.productGetSubs = this.data.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      this.products.forEach(element => {
        if( mensaje == element ){
          return
        }
      });
    });
    return this.http.post(`${this.url}/historial.json`, mensaje);
  }
  
  //Reed - get form from the database
  public getProducts():Observable<any>{  
    return this.data.getProducts();
  }
    //get with ID
  public getProductsById(id: any): Observable<any> {
    return this.data.getProductsById(id);
  }

  //Update - chage the information of the form [ ID needed ]
  public updateProduct( id:any, mensaje:any ) : Observable<any> {
    return this.data.updateProduct(id,mensaje);
  }

  //Delete - remove the form from the database [ ID needed ]
  public deleteProduct(id: any): Observable<any> {
    return this.data.deleteProduct(id);
  }

  setCurrentElement(element){
    this.currentElent = element;
  }  
}