import { DataTypes, Model } from "sequelize";
import { sequelize } from "../index.ts";

export class UsersModel extends Model {
  declare id: string;
  declare name: string;
  declare email: string;
  declare password: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

UsersModel.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: "Users",
  tableName: 'users',
  freezeTableName: true,
  timestamps: true
});