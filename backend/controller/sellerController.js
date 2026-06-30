// import { pool } from "../database/db.js";

// const getAllRestaurants = (async (req, res) => {
//   try {
//     const [rows] = await pool.query(
//     "SELECT * FROM users WHERE role = 'restaurant_owner';"
//     );
//     res.json(rows);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// })

// export { getAllRestaurants };

import Restaurant from "../models/Restaurant.js";
import User from "../models/user.js";

export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      include: [
        {
          model: User,
          attributes: ["full_name", "email"],
        },
      ],
    });

    res.json(restaurants);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["full_name", "email"],
        },
      ],
    });

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};