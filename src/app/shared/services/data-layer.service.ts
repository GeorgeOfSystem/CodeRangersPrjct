import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';

@Injectable()
export class DataLayerService {
  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {}

  //Create - Add form to the database
  public addProduct(mensaje: any): Observable<any> {
    return this.http.post(`${this.url}/historial.json`, mensaje);
  }
  //Reed - get form from the database
  public getProducts():Observable<any>{
    return this.http.get(`${this.url}/formularios.json`)
  }
    //get with ID
  public getProductsById(id: any): Observable<any> {
    return this.http.get(`${this.url}/historial.json?orderBy="ownerId"&equalTo="${id}"&print=pretty`);
  }

  //Update - chage the information of the form [ ID needed ]
  public updateProduct( id:any, mensaje:any ) : Observable<any> {
    return this.http.put(`${this.url}/historial/${id}.json`,mensaje)
  }

  //Delete - remove the form from the database [ ID needed ]
  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.url}/historial/${id}.json`);
  }
  
}
