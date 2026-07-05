import express from "express";
import { verifyToken } from "../middleware/auth_middleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

import {
  getAllRestaurants,
  getRestaurantById,
  getProfile,
  updateProfile,
  updateSettings,
  getCategories,
  getProducts,
  createProduct,
  updateProduct,
  toggleProductStatus,
  deleteProduct,
  getOrders,
  acceptOrder,
  prepareOrder,
  sendForDelivery,
  cancelOrder,
  getDashboardMetrics,
  getRevenueChart,
  getOrdersStream,
  getAnalyticsSummary,
  getVolumeTimeline,
  getSalesMix,
  getPromotions,
  createPromotion,
} from "../controller/sellerController.js";

const route = express.Router();

// Public routes
route.get("/restaurants", getAllRestaurants);
route.get("/restaurants/:id", getRestaurantById);

// Protected routes
route.use(verifyToken, authorizeRoles("restaurant_owner"));

// Profile
route.get("/profile", getProfile);
route.put("/profile", updateProfile);
route.put("/settings", updateSettings);

// Menu
route.get("/categories", getCategories);
route.get("/products", getProducts);
route.post("/products", createProduct);
route.put("/products/:id", updateProduct);
route.patch("/products/:id/status", toggleProductStatus);
route.delete("/products/:id", deleteProduct);

// Orders
route.get("/orders", getOrders);
route.put("/orders/:id/accept", acceptOrder);
route.put("/orders/:id/prepare", prepareOrder);
route.put("/orders/:id/send-for-delivery", sendForDelivery);
route.put("/orders/:id/cancel", cancelOrder);

// Dashboard
route.get("/dashboard/metrics", getDashboardMetrics);
route.get("/dashboard/revenue-chart", getRevenueChart);
route.get("/dashboard/orders-stream", getOrdersStream);

// Analytics
route.get("/analytics/summary", getAnalyticsSummary);
route.get("/analytics/volume-timeline", getVolumeTimeline);
route.get("/analytics/sales-mix", getSalesMix);

// Promotions
route.get("/promotions", getPromotions);
route.post("/promotions", createPromotion);

export default route;