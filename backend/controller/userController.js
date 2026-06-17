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

const createUser = (async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, password, role]
    );
    res.status(201).json({
      message: "User created successfully",
      userId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export { getAllUsers, createUser };