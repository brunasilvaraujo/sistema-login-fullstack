import { UsersModel } from "../database/models/Users.ts";

async function register(user: any) {
  try {
    const newUser = await UsersModel.create(user);
    return newUser;
  } catch (error) {
    throw error;
  }
}

async function getUserByEmail(email: string) {
  const user = await UsersModel.findOne({ where: { email } });
  return user;
}

async function getUserById(id: string) {
  const user = await UsersModel.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
  });
  return user;
}

export const usersService = {
  register,
  getUserByEmail,
  getUserById,
};
