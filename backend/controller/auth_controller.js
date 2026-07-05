import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import Driver from "../models/Driver.js";
import Customer from "../models/customer.js";

import sequelize from "../database/db.js";
// ========================
// REGISTER
// ========================
export const register = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { full_name, email, phone, password, address } = req.body;

    // 1. Validation
    if (!full_name || !email || !password) {
      return res.status(400).json({
        message: "Full name, email, and password are required",
      });
    }

    // 2. Check duplicate email
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }
    // 3. Hash password
    const password_hash = await bcrypt.hash(password, 10);
    // 4. Create User
    const user = await User.create(
      {
        full_name,
        email,
        phone,
        password_hash,
        role: "customer",
      },
      { transaction }
    );
    // 5. Create Customer profile
    await Customer.create(
      {
        user_id: user.user_id,
        address,
      },
      { transaction }
    );
    // 6. Commit transaction
    await transaction.commit();

    return res.status(201).json({
      message: "User registered successfully",
      user_id: user.user_id,
    });

  } catch (error) {
    await transaction.rollback();

    return res.status(500).json({
      message: error.message,
      errors: error.errors,
    });
  }
};

// ========================
// LOGIN
// ========================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // 2. Find user
    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // 3. Check password
    const isMatch = await bcrypt.compare(password, user.password_hash);

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
    // 4. Generate JWT token
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

    // 5. Response
    return res.status(200).json({
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
    return res.status(500).json({
      message: error.message,
    });
  }
};