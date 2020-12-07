import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { environment } from '../../../environments/environment';

@Injectable()
export class BusinessLayerService {
  currentElent;
  url = environment.app.apiBaseUrl;
  productGetSubs: Subscription;
  products = []

  constructor(private http: HttpClient) {}

  //Create - Add form to the database
  public addProduct(mensaje: any): Observable<any> {
    var isRepet = true;
    this.products = [];
    this.productGetSubs = this.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      this.products.forEach(element => {
        if( mensaje == element ){
          return
        }
      });
    });
    return this.http.post(`${this.url}`, mensaje);
  }
  
  //Read - get form from the database
  public getProducts():Observable<any>{  
    return this.http.get(`${this.url}`);
  }
    //get with ID
  public getProductsById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  //Update - chage the information of the form [ ID needed ]
  public updateProduct( mensaje:any ) : Observable<any> {
    return this.http.put(`${this.url}/${mensaje.id}`, mensaje);
  }

  //Delete - remove the form from the database [ ID needed ]
  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}