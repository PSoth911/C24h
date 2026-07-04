import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import Driver from "../models/Driver.js";

export const register = async (req, res) => {
  try {
    const {
      full_name,
      email,
      phone,
      password,
      address,
    } = req.body;

    // Validation
    if (!full_name || !email || !password) {
      return res.status(400).json({
        message: "Full name, email and password are required",
      });
    }

    // Check existing email
    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Hash password
    const password_hash = await bcrypt.hash(
      password,
      10
    );

    // Create customer account
    const user = await User.create({
      full_name,
      email,
      phone,
      password_hash,
      address,
      role: "customer",
    });

    res.status(201).json({
      message: "Account created successfully",
      user: {
        id: user.user_id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // Find user
    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    let driver = null;

    if (user.role === "driver") {
      driver = await Driver.findOne({
        where: { user_id: user.user_id },
      });
    }

    // Generate token
    const token = jwt.sign(
      {
        id: user.user_id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.user_id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
        driver_id: driver?.driver_id ?? null,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};