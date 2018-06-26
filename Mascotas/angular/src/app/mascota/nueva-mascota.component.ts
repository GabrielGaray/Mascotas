import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as esLocale from "date-fns/locale/es";
import * as errorHandler from "../tools/error-handler";
import { IErrorController } from "../tools/error-handler";
import { Mascota, MascotaService } from "./mascota.service";
import { Raza, RazaService } from "../raza/raza.service";



@Component({
  selector: "app-nueva-mascota",
  styles: ["/deep/ .ngx-datepicker-input {margin: -6px; margin-left: -10px;} "],
  templateUrl: "./nueva-mascota.component.html"
})
export class NuevaMascotaComponent implements OnInit, IErrorController {
  mascota: Mascota;
  arLocale = esLocale;
  formSubmitted: boolean;
  razas: Raza[];
  raza: Raza;

  errorMessage: string;
  errors: string[] = [];

  constructor(
    private mascotasService: MascotaService,
    private razaService: RazaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.mascota = {
      _id: undefined,
      name: "",
      birthDate: "",
      description: "",
      raza: "",
    };
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params["id"];
      if (id) {
        this.mascotasService
          .buscarMascota(id)
          .then(mascota => {
            this.mascota = mascota;
            this.razaService
            .buscarRaza(mascota.raza)
            .then((raza) => this.raza = raza)
            .catch(error => {
              errorHandler.procesarValidacionesRest(this, error);
            });
          })
          .catch(error => {
            errorHandler.procesarValidacionesRest(this, error);
          });
      }
    });
    this.razaService
      .buscarRazas()
      .then((razas) => this.razas = razas)
      .catch(error => {
        errorHandler.procesarValidacionesRest(this, error);
      });
  }

  submitForm() {
    errorHandler.cleanRestValidations(this);
    this.mascotasService
      .guardarMascota(this.mascota)
      .then(mascota => this.router.navigate(["/mascotas"]))
      .catch(error => errorHandler.procesarValidacionesRest(this, error));
  }

  onDelete() {
    errorHandler.cleanRestValidations(this);
    this.mascotasService
      .eliminarMascota(this.mascota._id)
      .then(any => this.router.navigate(["/mascotas"]))
      .catch(error => errorHandler.procesarValidacionesRest(this, error));
  }
}
