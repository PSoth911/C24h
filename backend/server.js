import express from "express";
import cors from "cors";
// import { pool } from "./database/db.js";
import sequelize from "./database/db.js";
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
  const { email, password } = req.body;

  const users = [
    {
      id: 1,
      email: "admin@gmail.com",
      password: "123456",
      role: "admin",
    },
    {
      id: 2,
      email: "rider@gmail.com",
      password: "123456",
      role: "delivery",
    },
    {
      id: 3,
      email: "customer@gmail.com",
      password: "123456",
      role: "customer",
    },
    {
      id: 4,
      email: "restaurant@gmail.com",
      password: "123456",
      role: "restaurant_owner",
    },
  ];

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  return res.json({
    token: `mock-token-${user.id}`,
    role: user.role,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  });
});

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

