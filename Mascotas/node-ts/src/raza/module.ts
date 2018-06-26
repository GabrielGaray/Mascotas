"use strict";

import { Express } from "express";
import * as passport from "passport";
import * as raza from "./raza.service";

export function init(app: Express) {
  // Rutas de acceso a mascotas
  app
    .route("/raza")
    .get(passport.authenticate("jwt", { session: false }), raza.findAll)
    .post(passport.authenticate("jwt", { session: false }), raza.validateUpdate, raza.update);

  app
    .route("/raza/:razaId")
    .get(raza.findByID, raza.read)
    .delete(passport.authenticate("jwt", { session: false }), raza.findByID, raza.remove);
}
