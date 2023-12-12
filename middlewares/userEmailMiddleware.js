import { User } from "../models/User.js";

export const userEmailMiddleware = async (req, res, next) => {
  const { email } = req.body;

  const userExist = await User.findOne({ email: email });

  if (userExist && userExist.email)
    return res
      .status(401)
      .json({ messagem: "Email já cadastrado, tente outro!!!" });

  next();
};
