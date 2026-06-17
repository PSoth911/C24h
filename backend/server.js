import express from "express";
import cors from "cors";
import { pool } from "./database/db.js";

import userRoutes from "./routes/uerRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import deliverRoutes from "./routes/deliverRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);
app.use("/", deliverRoutes);
app.use("/", sellerRoutes);

app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;

  const admin = {
    id: 1,
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
  };

  if (
    email === admin.email &&
    password === admin.password
  ) {
    return res.json({
      token: "abc123",
      role: "admin",
    });
  }

  return res.status(401).json({
    message: "Invalid credentials",
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});