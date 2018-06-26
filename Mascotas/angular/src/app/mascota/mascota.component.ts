import { Component, OnInit } from "@angular/core";
import { Mascota, MascotaService } from "./mascota.service";
import { RazaService, Raza } from "../raza/raza.service";


@Component({
  selector: "app-mascota",
  templateUrl: "./mascota.component.html"
})
export class MascotaComponent implements OnInit {
  errorMessage: string;
  mascotas: Mascota[];
  razas: Raza[];

  constructor(private mascotasService: MascotaService, private razaService: RazaService) { }

  ngOnInit() {
    this.razaService
      .buscarRazas()
      .then(razas => (this.razas = razas))
      .catch(error => (this.errorMessage = <any>error));
    this.mascotasService
      .buscarMascotas()
      .then(mascotas => (this.mascotas = mascotas))
      .catch(error => (this.errorMessage = <any>error));
  }

  getName(id) {
    if (id === undefined) return "";
    return this.razas.filter(raza => raza._id === id)[0].name;
  }
}
