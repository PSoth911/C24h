import express from "express";
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