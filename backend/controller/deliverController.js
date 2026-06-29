import User from "../models/user.js";
import Driver from "../models/Driver.js";
import Delivery from "../models/Delivery.js";
import Order from "../models/Order.js";
import Restaurant from "../models/Restaurant.js";

/* ─────────────────────────────────────────
   GET /api/deliver/profile
   body: { user_id }
───────────────────────────────────────── */
export const getProfile = async (req, res) => {
  try {
    const { user_id } = req.body;

    const foundUser = await User.findByPk(user_id, {
      attributes: { exclude: ["password_hash"] },
      include: [
        {
          model: Driver,
          include: [{ model: Delivery }],
        },
      ],
    });

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ success: true, data: foundUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* ─────────────────────────────────────────
   GET /api/deliver/stats/:driver_id
   Returns summary counts + earnings
───────────────────────────────────────── */
export const getDriverStats = async (req, res) => {
  try {
    const { driver_id } = req.params;

    const deliveries = await Delivery.findAll({
      where: { driver_id },
    });

    const total      = deliveries.length;
    const delivered  = deliveries.filter((d) => d.delivery_status === "delivered").length;
    const pending    = deliveries.filter((d) => d.delivery_status === "pending").length;
    const cancelled  = deliveries.filter((d) => d.delivery_status === "cancelled").length;

    // Earnings: assume each delivered order earns a flat fee stored in delivery_fee
    const totalEarnings = deliveries
      .filter((d) => d.delivery_status === "delivered")
      .reduce((sum, d) => sum + parseFloat(d.delivery_fee || 0), 0);

    // Weekly breakdown — last 7 days
    const now = new Date();
    const weekly = Array.from({ length: 7 }, (_, i) => {
      const day = new Date(now);
      day.setDate(now.getDate() - (6 - i));
      const label = day.toLocaleDateString("en-US", { weekday: "short" });
      const dateStr = day.toISOString().split("T")[0];

      const earned = deliveries
        .filter(
          (d) =>
            d.delivery_status === "delivered" &&
            d.updatedAt?.toISOString().startsWith(dateStr)
        )
        .reduce((sum, d) => sum + parseFloat(d.delivery_fee || 0), 0);

      return { day: label, earning: earned };
    });

    return res.json({
      success: true,
      data: { total, delivered, pending, cancelled, totalEarnings, weekly },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* ─────────────────────────────────────────
   GET /api/deliver/history/:driver_id
   Recent completed deliveries
───────────────────────────────────────── */
export const getDeliveryHistory = async (req, res) => {
  try {
    const { driver_id } = req.params;

    const deliveries = await Delivery.findAll({
      where: { driver_id, delivery_status: "delivered" },
      include: [
        {
          model: Order,
          include: [{ model: Restaurant, attributes: ["restaurant_name"] }],
        },
      ],
      order: [["updatedAt", "DESC"]],
      limit: 10,
    });

    return res.json({ success: true, data: deliveries });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* ─────────────────────────────────────────
   GET /api/deliver/active/:driver_id
   Current active delivery if any
───────────────────────────────────────── */
export const getActiveDelivery = async (req, res) => {
  try {
    const { driver_id } = req.params;

    const active = await Delivery.findOne({
      where: {
        driver_id,
        delivery_status: ["pending", "picked_up", "on_the_way"],
      },
      include: [
        {
          model: Order,
          include: [{ model: Restaurant, attributes: ["restaurant_name", "address"] }],
        },
      ],
    });

    return res.json({ success: true, data: active });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* ─────────────────────────────────────────
   PATCH /api/deliver/status/:delivery_id
   body: { status }
   Advance delivery step
───────────────────────────────────────── */
export const updateDeliveryStatus = async (req, res) => {
  try {
    const { delivery_id } = req.params;
    const { status } = req.body;

    const delivery = await Delivery.findByPk(delivery_id);

    if (!delivery) {
      return res.status(404).json({ message: "Delivery not found" });
    }

    delivery.delivery_status = status;
    await delivery.save();

    return res.json({ success: true, data: delivery });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* ─────────────────────────────────────────
   PATCH /api/deliver/profile/:user_id
   body: { full_name, phone }
───────────────────────────────────────── */
export const updateProfile = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { full_name, phone } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.update({ full_name, phone });

    return res.json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};