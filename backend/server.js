import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import sequelize from "./database/db.js";
import "./database/associations.js";

import authRoutes from "./routes/auth_route.js";
import CustomerRoutes from "./routes/Customer_route.js"
import RestaurantRoute from "./routes/sellerRoutes.js"
import CartRoutes from "./routes/cart_route.js";
import OrderRoute from "./routes/Order_route.js"
import ReviewRoute from "./routes/Review_route.js"
import ProductRoute from "./routes/Product_route.js"
import CategoryRoute from "./routes/categoryroute.js"
import FavauriteRoute from "./routes/favourithroute.js"
import NotificationRoute from "./routes/notification_route.js"
import CouponRoute from "./routes/couponRoute.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api",CustomerRoutes);
app.use("/api",RestaurantRoute);
app.use("/api",CartRoutes)
app.use("/api/orders",OrderRoute)
app.use("/api",ReviewRoute)
app.use("/api",ProductRoute)
app.use("/api",CategoryRoute)
app.use("/api",FavauriteRoute)
app.use("/api",NotificationRoute)
app.use("/api",CouponRoute)

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log(" Database connected");

    await sequelize.sync();
    console.log(" Models synchronized");

    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

startServer();