import { Router } from "express";

import { loginController } from "./controllers/login.controller.ts";
import { profileController } from "./controllers/profile.controller.ts";
import { registerController } from "./controllers/regiter.controller.ts";

import { authMiddleware } from "./middleware/auth.middleware.ts";
import { validateMiddleware } from "./middleware/validator.middleware.ts";

import { userSchema } from "./schema/users.schema.ts";

export const routes = Router();

routes.post(
  '/register',
  validateMiddleware(userSchema),
  registerController);

routes.get(
  '/me',
  authMiddleware(),
  profileController);

routes.post(
  '/login',
  loginController)