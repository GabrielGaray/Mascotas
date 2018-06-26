import { Component, OnInit } from "@angular/core";
import { RazaService, Raza } from "./raza.service";
import * as errorHandler from "../tools/error-handler";
import { IErrorController } from "../tools/error-handler";

@Component({
  selector: "app-raza",
  templateUrl: "./raza.component.html",
})
export class RazaComponent implements OnInit {
  razas: Raza[];
  errorMessage: string;
  errors: string[] = [];
  contador: number = 0;
  constructor(private razaService: RazaService) {
  }

  ngOnInit() {
    this.razaService.buscarRazas()
    .then((razas) => {
      this.razas = razas;
    })
    .catch(error => errorHandler.procesarValidacionesRest(this, error));
  }
  getNumber() {
    return ++this.contador;
  }
}