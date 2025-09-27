// import path from "node:path";
import { Sequelize } from "sequelize";
import { configOptions } from "./config.ts";

export const sequelize = new Sequelize({
  ...configOptions,
  dialect: "mysql",
  // modelPaths: [path.join(__dirname, "/models")],
});