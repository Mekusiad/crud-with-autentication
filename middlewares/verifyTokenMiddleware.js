import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// import { User } from "../models/User.js";

dotenv.config();

export const verifyTokenMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (token === undefined)
    return res
      .status(401)
      .json({ auth: false, message: "Token não informado." });

  jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
    if (err)
      return res
        .status(401)
        .json({ auth: false, message: "Token Inválido e/ou expirado." });

    req.userEmail = decoded.email;
    next();
  });
};
