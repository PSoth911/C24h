import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const Restaurant = sequelize.define(
  "Restaurant",
  {
    restaurant_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

    restaurant_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    description: {
      type: DataTypes.TEXT,
    },

    address: {
      type: DataTypes.TEXT,
    },

    phone: {
      type: DataTypes.STRING(20),
    },

    latitude: {
      type: DataTypes.DECIMAL(10, 8),
    },

    longitude: {
      type: DataTypes.DECIMAL(11, 8),
    },

    logo: {
      type: DataTypes.STRING(255),
    },

    status: {
      type: DataTypes.ENUM("open", "closed"),
      defaultValue: "open",
    },

    average_rating: {
      type: DataTypes.DECIMAL(2, 1),
      defaultValue: 0.0,
    },
  },
  {
    tableName: "restaurants",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Restaurant;