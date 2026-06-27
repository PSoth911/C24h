import express from "express";
import {
  createOrder,
  getCustomerOrders,
} from "../controller/orderController.js";

const router = express.Router();

router.post("/", createOrder);

router.get(
  "/customer/:customer_id",
  getCustomerOrders
);

export default router;