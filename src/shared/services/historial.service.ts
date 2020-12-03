import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class HistorialService {
  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getProductsById(id: any): Observable<any> {
    return this.http.get(
      `${
        this.url
      }/historial.json?orderBy="ownerId"&equalTo="${id}"&print=pretty`
    );
  }
  public addProduct(mensaje: any): Observable<any> {
    return this.http.post(`${this.url}/historial.json`, mensaje);
  }

  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.url}/historial/${id}.json`);
  }
}
