import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
    findbyemail,
    createcustomer,
} from "../repositories/user_repositories.js";

export const register = async (
    first_name,
    last_name,
    email,
    phone,
    password
) => {
    const existingUser = await findbyemail(email);

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = await createcustomer(
        first_name,
        last_name,
        email,
        phone,
        hashedPassword
    );

    return {
        userId,
        message: "Register successful",
    };
};

export const login = async (email, password) => {
    const user = await findbyemail(email);

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
        {
            user_id: user.user_id,
            email: user.email,
            role: user.user_type
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );

    return {
        token,
        user: {
            user_id: user.user_id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            role: user.user_type
        }
    };
};