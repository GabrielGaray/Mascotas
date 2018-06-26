import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { RestBaseService } from "../tools/rest.tools";

@Injectable()
export class RazaService extends RestBaseService {
  private url = "/raza";

  constructor(private http: Http) {
    super();
  }

  buscarRazas(): Promise<Raza[]> {
    return this.http
      .get(RazaService.serverUrl + this.url, this.getRestHeader())
      .toPromise()
      .then(response => {
        return response.json() as Raza[];
      })
      .catch(this.handleError);
  }

  buscarRaza(id: string): Promise<Raza> {
    return this.http
      .get(RazaService.serverUrl + this.url + "/" + id, this.getRestHeader())
      .toPromise()
      .then(response => {
        return response.json() as Raza;
      })
      .catch(this.handleError);
  }

  guardarRaza(value: Raza): Promise<Raza> {
    console.log(value, "guardar servicioRaza");
      return this.http
        .post(
          RazaService.serverUrl + this.url,
          JSON.stringify(value),
          this.getRestHeader()
        )
        .toPromise()
        .then(response => {
          return response.json() as Raza;
        })
        .catch(this.handleError);
    }

  eliminarRaza(id: string): Promise<any> {
    if (id) {
      return this.http
        .delete(
          RazaService.serverUrl + this.url + "/" + id,
          this.getRestHeader()
        )
        .toPromise()
        .then(response => {
          return "";
        })
        .catch(this.handleError);
    }
  }
}

export interface Raza {
  _id: string;
  name: string;
}
