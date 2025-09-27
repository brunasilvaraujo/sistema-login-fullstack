import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "../lib/jwt.ts";

export function authMiddleware() {
  return function (req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = verifyToken(token) as { sub: string };

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.userId = decoded?.sub;
    return next();
  };
}