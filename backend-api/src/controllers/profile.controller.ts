import type { Request, Response } from "express";
import { usersService } from "../services/users.service.ts";

export async function profileController(req: Request, res: Response) {
  try {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const user = await usersService.getUserById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });


    return res.json({ user });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}