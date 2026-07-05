import express from "express";
import cors from "cors";
import sequelize from "./database/db.js";
import * as Model from "./models/associations.js";

import authRoutes from "./routes/auth_route.js";
import adminRoutes from "./routes/adminRoute.js"
import deliverRoutes from "./routes/deliverRoutes.js"

import orderRoute from "./routes/orderRoute.js";
import restaurantRoute from "./routes/restaurantRoute.js";
import driverRoute from "./routes/driverRoute.js";
import sellerRoutes from "./routes/sellerRoutes.js";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/deliver", deliverRoutes);

app.use("/api/orders", orderRoute);
app.use("/api/restaurant",restaurantRoute);
app.use("/api/driver", driverRoute);
app.use("/api/seller", sellerRoutes);


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

