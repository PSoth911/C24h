import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const SubscriptionMealTime = sequelize.define(
  "SubscriptionMealTime",
  {
    meal_time_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    meal_time: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    tableName: "subscription_meal_times",
    timestamps: false,
  }
);

export default SubscriptionMealTime;
