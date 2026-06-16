import { pool } from "../database/db.js";

const getAllUsers = (async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
})

export { getAllUsers };