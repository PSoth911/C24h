import express from "express";
<<<<<<< HEAD
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
=======
import pool from "./src/config/db.js";
import {findbyemail,createcustomer} from "./repositories/user_repositories.js"

import dotenv from "dotenv"
dotenv.config({path:"../.env"})
import authRoutes from "./route/auth_route.js"
// console.log(process.env.DB_HOST)
const app = express();
const PORT = 3000;

app.use(express.json());

// async function testConnection() {
//   try {
//     const connection = await pool.getConnection();
//     console.log("Database Connected");
//     connection.release();
//   } catch (error) {
//     console.error("Database Connection Failed");
//     console.error(error.message);
//   }
// }
// testConnection();
>>>>>>> origin/daro

// async function test() {
//     try{
//         const user= await findbyemail("daro128@gmail.com")
//         console.log(user)
//     }catch(error){
//         console.log(error.message)
//     }
// }
// async function test1() {
//     try{
//         const user= await createcustomer("Rat","daro","daro128@gmail.com","122233455","123456")
//         console.log(user)
//     }catch(error){
//         console.log(error.message)
//     }
// }

// test()
app.use("/api/auth",authRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});