import { DataTypes, QueryInterface } from "sequelize";
import { MigrationFn } from "umzug";

export const up: MigrationFn<QueryInterface> = async (params) => {
  await params.context.createTable('users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  });
};
export const down: MigrationFn<QueryInterface> = async (params) => {
  await params.context.dropTable('users');
};
