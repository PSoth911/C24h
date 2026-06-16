import { pool } from "../database/db.js";

const getAllRestaurants = (async (req, res) => {
  try {
    const [rows] = await pool.query(
    "SELECT * FROM users WHERE role = 'restaurant_owner';"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
})

export { getAllRestaurants };