import { DataTypes, QueryInterface } from 'sequelize';
import type { MigrationFn } from 'umzug';

export const up: MigrationFn<QueryInterface> = async params => {
  await params.context.createTable('posts', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
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

export const down: MigrationFn<QueryInterface> = async params => {
  await params.context.dropTable('posts');
};
