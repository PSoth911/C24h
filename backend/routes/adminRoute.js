import express from "express";
import { getAllUsers,getAllRestaurants,getAllDeliveries, getMe,getDashboardStats } from "../controller/adminController.js";


const router = express.Router();

router.get("/users", getAllUsers);
router.get("/restaurants", getAllRestaurants);
router.get("/deliveries", getAllDeliveries);
router.get("/profile", getMe);
router.get("/dashboard", getDashboardStats);



export default router;