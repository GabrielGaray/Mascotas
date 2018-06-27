import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as esLocale from "date-fns/locale/es";
import * as errorHandler from "../tools/error-handler";
import { IErrorController } from "../tools/error-handler";
import { Raza, RazaService } from "./raza.service";
import { MascotaService, Mascota } from "../mascota/mascota.service"; //


@Component({
  selector: "app-nueva-raza",
  styles: ["/deep/ .ngx-datepicker-input {margin: -6px; margin-left: -10px;} "],
  templateUrl: "./nueva-raza.component.html"
})
export class NuevaRazaComponent implements OnInit, IErrorController {
    raza: Raza;
    mascota: Mascota; //
    arLocale = esLocale;
    formSubmitted: boolean;

    errorMessage: string;
    errors: string[] = [];

    constructor(
        private razasService: RazaService,
        private route: ActivatedRoute,
        private router: Router,
        private mascotaService: MascotaService
              ) {
        this.raza = {
            _id: undefined,
            name: ""
        };
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
          const id = params["id"];
          if (id) {
            this.razasService
              .buscarRaza(id)
              .then(raza => {
                this.raza = raza;
              })
              .catch(error => {
                errorHandler.procesarValidacionesRest(this, error);
              });
          }
        });
      }

    submitForm() {
        errorHandler.cleanRestValidations(this);
        this.razasService
          .guardarRaza(this.raza)
          .then(() => this.router.navigate(["/razas"]))
          .catch(error => errorHandler.procesarValidacionesRest(this, error));
    }

    onDelete() {
        errorHandler.cleanRestValidations(this);
        this.mascotaService
        .buscarMascotas()
        .then(mascotas => {
          if (mascotas.find(mascota => mascota.raza === this.raza._id))
            return alert("no se puede borrar pq esta siendo usada");
          else {
            this.razasService
            .eliminarRaza(this.raza._id)
            .then(any => this.router.navigate(["/razas"]))
            .catch(error => errorHandler.procesarValidacionesRest(this, error));
          }
          })
        .catch(error => (this.errorMessage = <any>error));
    }
}