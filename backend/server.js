import express from "express";
import cors from "cors";
// import { pool } from "./database/db.js";
import sequelize from "./database/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/user.js";

import userRoutes from "./routes/uerRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import deliverRoutes from "./routes/deliverRoutes.js";
import authRoutes from "./routes/auth_route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);
app.use("/", deliverRoutes);
app.use("/", sellerRoutes);
app.use("/api/auth", authRoutes);

app.post("/api/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. find user in database
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // 2. check password using bcrypt
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // 3. check role (only admin allowed)
    // if (user.role !== "admin") {
    //   return res.status(403).json({
    //     message: "Access denied: Admin only",
    //   });
    // }

    // 4. generate JWT token
    const token = jwt.sign(
      {
        id: user.user_id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET || "secret_key",
      { expiresIn: "1d" }
    );

    // 5. send response
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.user_id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function seedUsers() {
  await sequelize.sync(); 
  // ⚠️ WARNING: this deletes existing tables & data

  const users = [
    {
      full_name: "Admin User",
      email: "admin@gmail.com",
      phone: "012345678",
      password: "123456",
      role: "admin",
      address: "Phnom Penh",
    },
    {
      full_name: "Customer One",
      email: "customer1@gmail.com",
      phone: "010111222",
      password: "123456",
      role: "customer",
      address: "BKK",
    },
    {
      full_name: "Customer Two",
      email: "customer2@gmail.com",
      phone: "010333444",
      password: "123456",
      role: "customer",
      address: "Toul Kork",
    },
    {
      full_name: "Restaurant Owner",
      email: "restaurant@gmail.com",
      phone: "011223344",
      password: "123456",
      role: "restaurant_owner",
      address: "Sen Sok",
    },
    {
      full_name: "Delivery Rider",
      email: "rider@gmail.com",
      phone: "010998877",
      password: "123456",
      role: "delivery",
      address: "Chbar Ampov",
    },
  ];

  // hash passwords
  const hashedUsers = await Promise.all(
    users.map(async (u) => ({
      full_name: u.full_name,
      email: u.email,
      phone: u.phone,
      password_hash: await bcrypt.hash(u.password, 10),
      role: u.role,
      address: u.address,
    }))
  );

  await User.bulkCreate(hashedUsers);

  console.log("✅ 5 users inserted successfully");
  process.exit();
}



async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
    await sequelize.sync(); // create tables if needed
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to database:", error);
  }
}

startServer();

