import { pool } from "../database/db.js";

const getAllDeliveries = (async (req, res) => {
  try {
    const [rows] = await pool.query(
    "SELECT * FROM users WHERE role = 'rider';"
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
})

export { getAllDeliveries };