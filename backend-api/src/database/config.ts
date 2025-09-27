import type { Options } from "sequelize";

export const configOptions: Options = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
};