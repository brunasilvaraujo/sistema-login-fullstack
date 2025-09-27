import Joi from "joi";
import type { NextFunction, Request, Response } from "express";

export function validateMiddleware(schema: Joi.ObjectSchema) {
  return function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { error, value } = schema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    req.body = value; // valor validado e possivelmente transformado
    next();
  }
}