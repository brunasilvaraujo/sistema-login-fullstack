import type { Request, Response } from "express";
import { usersService } from "../services/users.service.ts";
import { hashPassword } from "../lib/bcrypt.ts";

export async function registerController(req: Request, res: Response) {
  try {
    // Validar dados do body
    const user = req.body

    // Validar se usuário já existe(por email)
    const existingUser = await usersService.getUserByEmail(user.email);

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(user.password);

    if (!hashedPassword) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    // Criar usue1rio
    const created = await usersService.register({
      name: user.name,
      email: user.email,
      password: hashedPassword,
    });

    return res.status(201).json({ userId: created.id });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}