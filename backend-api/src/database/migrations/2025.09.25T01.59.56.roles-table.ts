import { QueryInterface, DataTypes } from 'sequelize';
import type { MigrationFn } from 'umzug';

export const up: MigrationFn<QueryInterface> = async params => {
  await params.context.createTable('roles', {
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
  })
};
export const down: MigrationFn<QueryInterface> = async params => {
  await params.context.dropTable('roles');
};
