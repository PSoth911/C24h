import sequelize from "../database/db.js";

import Customer from "../models/customer.js";
import Cart from "../models/Cart.js";
import CartItem from "../models/CartItem.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import OrderItem from "../models/OrderItem.js";
import Payment from "../models/Payment.js";
import Restaurant from "../models/Restaurant.js";
export const createOrder = async (req, res) => {
    const transaction = await sequelize.transaction();

    try {
        const { payment_method, delivery_address } = req.body;

        // Validate input
        if (!payment_method || !delivery_address) {
            await transaction.rollback();

            return res.status(400).json({
                message: "Payment method and delivery address are required",
            });
        }

        // Validate payment method
        const validMethods = ["cash", "KHQR", "CARD"];

        if (!validMethods.includes(payment_method)) {
            await transaction.rollback();

            return res.status(400).json({
                message: "Invalid payment method",
            });
        }

        // Find customer
        const customer = await Customer.findOne({
            where: {
                user_id: req.user.id,
            },
            transaction,
        });

        if (!customer) {
            await transaction.rollback();

            return res.status(404).json({
                message: "Customer not found",
            });
        }

        // Find cart
        const cart = await Cart.findOne({
            where: {
                customer_id: customer.customer_id,
            },
            include: [
                {
                    model: CartItem,
                    include: [
                        {
                            model: Product,
                        },
                    ],
                },
            ],
            transaction,
        });

        if (!cart || cart.CartItems.length === 0) {
            await transaction.rollback();

            return res.status(400).json({
                message: "Cart is empty",
            });
        }

        // Get restaurant
        const restaurant_id = cart.CartItems[0].Product.restaurant_id;

        // Calculate total and validate stock
        let total = 0;

        for (const item of cart.CartItems) {
            if (item.quantity > item.Product.stock) {
                await transaction.rollback();

                return res.status(400).json({
                    message: `${item.Product.product_name} is out of stock`,
                });
            }

            total += Number(item.subtotal);
        }

        // Create order
        const order = await Order.create(
            {
                customer_id: customer.customer_id,
                restaurant_id,
                total_amount: total,
                delivery_address,
                order_status: "pending",
                payment_status: "pending",
            },
            {
                transaction,
            }
        );

        // Create order items and update stock
        for (const item of cart.CartItems) {
            await OrderItem.create(
                {
                    order_id: order.order_id,
                    product_id: item.product_id,
                    quantity: item.quantity,
                    unit_price: item.price,
                    subtotal: item.subtotal,
                },
                {
                    transaction,
                }
            );

            await Product.update(
                {
                    stock: item.Product.stock - item.quantity,
                },
                {
                    where: {
                        product_id: item.product_id,
                    },
                    transaction,
                }
            );
        }

        // Create payment
        await Payment.create(
            {
                order_id: order.order_id,
                payment_method,
                amount: total,
                payment_status: "pending",
            },
            {
                transaction,
            }
        );

        // Clear cart
        await CartItem.destroy({
            where: {
                cart_id: cart.cart_id,
            },
            transaction,
        });

        // Commit transaction
        await transaction.commit();

        return res.status(201).json({
            message: "Order created successfully",
            order_id: order.order_id,
            total_amount: order.total_amount,
            order_status: order.order_status,
            payment_status: order.payment_status,
        });
    } catch (error) {
        await transaction.rollback();

        console.error(error);

        return res.status(500).json({
            message: error.message,
        });
    }
};

export const getOrders = async (req, res) => {
    try {
        const customer = await Customer.findOne({
            where: {
                user_id: req.user.id,
            }
        })
        if (!customer) {
            return res.status(404).json({
                message: "customer not found"
            })
        }
        const orders = await Order.findAll({
            where: {
                customer_id: customer.customer_id,
            },
            include: [
                {
                    model: Restaurant,
                    attributes: [
                        "restaurant_id",
                        "restaurant_name",
                        "logo",
                    ],
                },
                {
                    model: OrderItem,
                    attributes: [
                        "quantity",
                    ],
                    include: [
                        {
                            model: Product,
                            attributes: [
                                "product_name",
                                "image",
                            ],
                        },
                    ],
                },
            ],
            order: [["order_date", "DESC"]],
        });

        return res.status(200).json({
            total_orders: orders.length,
            orders,
        });

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getOrderById = async (req, res) => {
    try {
        const { order_id } = req.params;
        // Find customer
        const customer = await Customer.findOne({
            where: {
                user_id: req.user.id,
            },
        });

        if (!customer) {
            return res.status(404).json({
                message: "Customer not found",
            });
        }

        // Find order
        const order = await Order.findOne({
            where: {
                order_id,
                customer_id: customer.customer_id,
            },
            include: [
                {
                    model: Restaurant,
                    attributes: ["restaurant_id", "restaurant_name"],
                },
                {
                    model: OrderItem,
                    include: [
                        {
                            model: Product,
                            attributes: [
                                "product_id",
                                "product_name",
                                "image",
                            ],
                        },
                    ],
                },
                {
                    model: Payment,
                    attributes: [
                        "payment_method",
                        "payment_status",
                        "amount",
                        "payment_date",
                    ],
                },
            ],
        });

        if (!order) {
            return res.status(404).json({
                message: "Order not found",
            });
        }

        return res.status(200).json({
            message: "Order retrieved successfully",
            order,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: error.message,
        });
    }
};

export const trackOrder = async (req, res) => {
    try {
        const { order_id } = req.params;

        // Find customer
        const customer = await Customer.findOne({
            where: {
                user_id: req.user.id,
            },
        });

        if (!customer) {
            return res.status(404).json({
                message: "Customer not found",
            });
        }

        // Find order
        const order = await Order.findOne({
            where: {
                order_id,
                customer_id: customer.customer_id,
            },
            attributes: [
                "order_id",
                "order_status",
                "payment_status",
                "delivery_address",
                "order_date",
            ],
        });

        if (!order) {
            return res.status(404).json({
                message: "Order not found",
            });
        }

        return res.status(200).json({
            message: "Order status retrieved successfully",
            order,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: error.message,
        });
    }
};