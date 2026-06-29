import {
  Delivery,
  Order,
  Driver,
  Restaurant
} from "../models/associations.js";

export const getAssignedDeliveries =
  async (req, res) => {
    try {
      const { driver_id } =
        req.params;

      const deliveries =
        await Delivery.findAll({
          where: { driver_id },
          include: [Order],
        });

      res.json(deliveries);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const pickupOrder = async (req, res) => {
    try {
        const delivery = await Delivery.findByPk(req.params.id);

        delivery.delivery_status = "picked_up";
        delivery.pickup_time = new Date();

        await delivery.save();

        const order = await Order.findByPk(delivery.order_id);
        order.order_status = "out_for_delivery";
        await order.save();

        res.json({ message: "Order accepted by driver" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deliverOrder =
  async (req, res) => {
    try {
      const delivery =
        await Delivery.findByPk(
          req.params.id
        );

      delivery.delivery_status =
        "delivered";

      delivery.delivery_time =
        new Date();

      await delivery.save();

      const order =
        await Order.findByPk(
          delivery.order_id
        );

      order.order_status =
        "delivered";

      await order.save();

      const driver =
        await Driver.findByPk(
          delivery.driver_id
        );

      driver.current_status =
        "available";

      await driver.save();

      res.json({
        message:
          "Order delivered",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };



export const getAvailableDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.findAll({
      where: {
        delivery_status: "assigned",
      },
      include: [
        {
          model: Order,
          include: [Restaurant],
        },
      ],
    });

    const formatted = deliveries.map((d) => ({
      delivery_id: d.delivery_id,
      order_id: d.order_id,
      restaurant_name: d.Order.Restaurant.restaurant_name,
      payout: d.Order.total_amount * 0.2, // example commission
      distance: "2.4 miles", // later you calculate real distance
      pickup_time_estimate: "8 mins",
    }));

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// driverController.js
export const acceptDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findByPk(req.params.delivery_id);
    if (!delivery) return res.status(404).json({ message: "Delivery not found" });

    const driver = await Driver.findOne({ where: { user_id: req.body.driver_id } });

    delivery.driver_id = driver.driver_id;
    delivery.delivery_status = "pending"; // transitions out of "assigned"
    await delivery.save();

    driver.current_status = "busy";
    await driver.save();

    return res.json({ success: true, data: delivery });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

