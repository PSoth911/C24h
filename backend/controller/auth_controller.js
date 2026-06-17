import {
    register,
    login
} from "../service/auth_service.js";

export const registerController = async (req, res) => {
    try {
        const result = await register(
            req.body.first_name,
            req.body.last_name,
            req.body.email,
            req.body.phone,
            req.body.password
        );

        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const loginController = async (req, res) => {
    try {
        const result = await login(
            req.body.email,
            req.body.password
        );

        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
};