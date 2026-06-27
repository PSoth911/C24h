import express from "express";

import {
  getAssignedDeliveries,
  pickupOrder,
  deliverOrder,
  getAvailableDeliveries
} from "../controller/driverController.js";

const router = express.Router();

router.get(
  "/orders/:driver_id",
  getAssignedDeliveries
);

router.put(
  "/orders/:id/pickup",
  pickupOrder
);

router.put(
  "/orders/:id/delivered",
  deliverOrder
);

router.get("/available", getAvailableDeliveries);

export default router;