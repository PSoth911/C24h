// import { pool } from "../database/db.js";

// const getAllDeliveries = (async (req, res) => {
//   try {
//     const [rows] = await pool.query(
//     "SELECT * FROM users WHERE role = 'rider';"
//     );
//     res.json(rows);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// })

// export { getAllDeliveries };

import User from "../models/user.js";

export const getAllDeliveries = async (req, res) => {
  try {
    const riders = await User.findAll({
      where: {
        role: "rider",
      },
    });

    res.status(200).json(riders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};