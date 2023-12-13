import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { User } from "../models/User.js";

dotenv.config();

export const loginController = async (req, res) => {
  const jwToken = jwt.sign({ email: req.user.email }, process.env.JWT_KEY, {
    expiresIn: "5m",
  });

  const { email } = req.body;
  await User.updateOne(
    { email: email },
    { $set: { token: jwToken, last_login: new Date() } }
  );

  return res.status(200).json({ message: "Usuário logado com sucesso!!!" });
};
