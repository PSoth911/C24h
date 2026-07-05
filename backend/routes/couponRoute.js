import express from "express";
import { validateCoupon,createCoupon } from "../controller/couponController.js";

const router = express.Router();

router.post("/coupons/validate", validateCoupon);
router.post("/coupons", createCoupon);

export default router;