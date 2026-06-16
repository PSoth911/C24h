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

app.listen(5000, () => {
  console.log("Server started on port 5000");
});