import User from "../models/user.js";
import Driver from "../models/Driver.js";
import Delivery from "../models/Delivery.js";

export const getProfile = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { user_id } = req.body;

    const foundUser = await User.findByPk(user_id, {
      attributes: {
        exclude: ["password_hash"],
      },
      include: [
        {
          model: Driver,
          include: [
            {
              model: Delivery,
            },
          ],
        },
      ],
    });

    console.log("FOUND USER:", foundUser);

    return res.json(foundUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};