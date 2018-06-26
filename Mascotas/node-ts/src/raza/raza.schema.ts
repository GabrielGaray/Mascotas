"use strict";

import * as mongoose from "mongoose";

export interface IRaza extends mongoose.Document {
  name: string;
  created: Number;
  enabled: Boolean;
}

/**
 * Esquema de Mascotas
 */
export let RazaSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
    trim: true,
    required: "Nombre es requerido"
  },
  created: {
    type: Date,
    default: Date.now()
  },
  enabled: {
    type: Boolean,
    default: true
  },
}, { collection: "razas" });

/**
 * Antes de guardar
 */
RazaSchema.pre("save", function (this: IRaza, next) {
  next();
});

export let Raza = mongoose.model<IRaza>("Raza", RazaSchema);