"use strict";

import * as escape from "escape-html";
import * as express from "express";
import { NextFunction } from "express-serve-static-core";
import { IUserSessionRequest } from "../security/security.service";
import * as errorHandler from "../utils/error.handler";
import { IRaza, Raza } from "./raza.schema";

/**
 * Retorna los datos de la Raza
 */
export interface IReadRequest extends IUserSessionRequest {
  raza: IRaza;
}
export function read(req: IReadRequest, res: express.Response) {
  res.json(req.raza);
}

/**
 * @apiDefine IRazaResponse
 *
 * @apiSuccessExample {json} Raza
 *    {
 *      "name": "Nombre de la Raza",
 *      "created": date (DD/MM/YYYY),
 *      "enabled": [true|false]
 *    }
 */

/**
 * @api {post} /raza Crear Raza
 * @apiName Crear Raza
 * @apiGroup Razas
 *
 * @apiDescription Crea una Raza.
 *
 * @apiExample {json} Raza
 *    {
 *      "name": "Nombre de la Raza",
 *    }
 *
 * @apiUse IRazaResponse
 *
 * @apiUse AuthHeader
 * @apiUse ParamValidationErrors
 * @apiUse OtherErrors
 */

export interface IUpdateRequest extends IUserSessionRequest {
  raza: IRaza;
}
export function validateUpdate(req: IUpdateRequest, res: express.Response, next: NextFunction) {
  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      return errorHandler.handleExpressValidationError(res, result);
    }
    next();
  });
}
export function update(req: IUpdateRequest, res: express.Response) {
    // tslint:disable-next-line:prefer-const
    let raza = new Raza();
    raza.name = req.body.name;
    raza.save(function (err: any) {
    if (err) return errorHandler.handleError(res, err);

    res.json(raza);
  });
}

/**
 * @api {delete} /raza/:razaId Eliminar Raza
 * @apiName Eliminar Raza
 * @apiGroup Razas
 *
 * @apiDescription Eliminar una Raza.
 *
 * @apiUse AuthHeader
 * @apiUse 200OK
 * @apiUse OtherErrors
 */
export interface IRemoveRequest extends IUserSessionRequest {
  raza: IRaza;
}
export function remove(req: IRemoveRequest, res: express.Response) {
  const raza = <IRaza>req.raza;

  raza.enabled = false;
  raza.save(function (err: any) {
    if (err) return errorHandler.handleError(res, err);

    res.send();
  });
}

/**
 * @api {get} /raza Listar Raza
 * @apiName Listar Raza
 * @apiGroup Razas
 *
 * @apiDescription Obtiene un listado de todas las Razas.
 *
 * @apiSuccessExample {json} Raza
 *  [
 *    {
 *      "name": "Nombre de la Raza",
 *      "created": date (DD/MM/YYYY),
 *      "enabled": [true|false]
 *    }, ...
 *  ]
 *
 * @apiUse AuthHeader
 * @apiUse 200OK
 * @apiUse OtherErrors
 */
export function findAll(req: IUserSessionRequest, res: express.Response, next: NextFunction) {
  Raza.find({
    enabled: true
  }).exec(function (err, razas) {
    if (err) return next();
    res.json(razas);
  });
}

/**
 * @api {put} /raza/:razaId Buscar Mascota
 * @apiName Buscar Raza
 * @apiGroup Razas
 *
 * @apiDescription Busca una Raza por id.
 *
 * @apiUse IRazaResponse
 *
 * @apiUse AuthHeader
 * @apiUse ParamValidationErrors
 * @apiUse OtherErrors
 */
export interface IFindByIdRequest extends express.Request {
  raza: IRaza;
}
export function findByID(req: IFindByIdRequest, res: express.Response, next: NextFunction) {
  const id = req.params.razaId;

  Raza.findOne({
    _id: escape(id),
    enabled: true
  },
    function (err, raza) {
      if (err) return errorHandler.handleError(res, err);

      if (!raza) {
        return errorHandler.sendError(res, errorHandler.ERROR_NOT_FOUND, "No se pudo cargar la Raza " + id);
      }

      req.raza = raza;
      next();
    });
}



