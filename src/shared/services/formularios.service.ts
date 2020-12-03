import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class FormulariosService {
  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.http.get(`${this.url}/formularios.json`);
  }
  public addProduct(mensaje: any): Observable<any> {
    return this.http.post(`${this.url}/formularios.json`, mensaje);
  }
}
