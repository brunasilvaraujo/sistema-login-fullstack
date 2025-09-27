import { SequelizeStorage, Umzug } from "umzug";
import { sequelize } from "./database/index.ts";

export const migrator = new Umzug({
  migrations: {
    glob: ["src/database/migrations/*.ts", { cwd: process.cwd() }]
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

export type Migration = typeof migrator._types.migration;