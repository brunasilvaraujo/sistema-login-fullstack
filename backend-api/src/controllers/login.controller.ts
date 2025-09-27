import type { Request, Response } from "express";
import { comparePassword } from "../lib/bcrypt.ts";
import { usersService } from "../services/users.service.ts";
import { generateToken } from "../lib/jwt.ts";

export async function loginController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await usersService.getUserByEmail(email);

    if (!user) {
      return res.status(409).json({ message: "Email or password incorrect" });
    }

    const comparePasswordAndHash = await comparePassword(password, user.password);

    if (!comparePasswordAndHash) {
      return res.status(500).json({ message: "Email or password incorrect" });
    }

    const token = generateToken(user.id);

    if (!token) {
      return res.status(500).json({ message: "Error logging in" });
    }

    return res.status(201).send({
      token,
    });

  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}