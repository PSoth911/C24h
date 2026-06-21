import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {User,Restaurant,Driver, Category,Order,Customer} from "../models/associations.js"

export const getAllUsers = async (req,res)=>{
    try {
        const users = await User.findAll({
            attributes:{
                exclude:["password_hash"],
            },
        });

        res.status(200).json({
            success:true,
            count:users.length,
            data:users,
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const getAllRestaurants = async (req,res)=>{
    try {
        const restaurants = await Restaurant.findAll({
            include: [
                {
                    model: User,
                    attributes: { exclude: ["password_hash"] },
                },
                {
                    model: Category,
                },
            ],
        });

         res.status(200).json({
            success:true,
            count:restaurants.length,
            data:restaurants,
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const getAllDeliveries = async (req,res)=>{
    try {
        const deliveries = await Driver.findAll({
             include: [
                {
                    model: User,
                    attributes: { exclude: ["password_hash"] },
                },
            ],
        });

         res.status(200).json({
            success:true,
            count:deliveries.length,
            data:deliveries,
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const getMe = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decoded.id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};


export const getDashboardStats = async (req, res) => {
  try {
    const totalDrivers = await Driver.count();
    const totalRestaurants = await Restaurant.count();
    const totalUsers = await User.count();
    const totalOrders = await Order.count();
    const orders = await Order.findAll({
        include: [
                {
                    model: Customer,
                    attributes: { exclude: ["password_hash"] },
                },
                {
                    model: Restaurant,
                },
            ],
    });

     res.status(200).json({
        success:true,
        data:{totalDrivers,
                totalRestaurants,
                totalUsers,
                totalOrders,
                orders,
        },
    })

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};