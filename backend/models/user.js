import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    full_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },

    phone: DataTypes.STRING(20),

    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    profile_image: DataTypes.STRING(255),

    address: DataTypes.TEXT,

    role: {
      type: DataTypes.ENUM(
        "customer",
        "restaurant_owner",
        "rider",
        "admin"
      ),
      defaultValue: "customer",
    },
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default User;