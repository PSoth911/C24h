import express from "express";
import {
  getAllUsers,
  getAllRestaurants,
  getAllDeliveries,
  getMe,
  getDashboardStats,
} from "../controller/adminController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management APIs
 */

/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get all users
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: List of all users
 */
router.get("/users", getAllUsers);

/**
 * @swagger
 * /admin/restaurants:
 *   get:
 *     summary: Get all restaurants
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: List of all restaurants
 */
router.get("/restaurants", getAllRestaurants);

/**
 * @swagger
 * /admin/deliveries:
 *   get:
 *     summary: Get all delivery drivers
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: List of all deliveries
 */
router.get("/deliveries", getAllDeliveries);

/**
 * @swagger
 * /admin/profile:
 *   get:
 *     summary: Get current admin profile
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin profile
 *       401:
 *         description: Unauthorized
 */
router.get("/profile", getMe);

/**
 * @swagger
 * /admin/dashboard:
 *   get:
 *     summary: Get dashboard statistics
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard statistics
 */
router.get("/dashboard", getDashboardStats);

export default router;