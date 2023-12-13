import bcrypt from "bcrypt";

import { User } from "../models/User.js";

export const loginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(403).json({
      message: "Campo obrigatório não preenchido, verifique e tente novamente.",
    });

  try {
    const userExist = await User.findOne({ email: email });

    if (!userExist)
      return res.status(401).json({
        message: "Login e-ou senha inválido, tente novamente!!!",
      });
    req.user = userExist;
    const isEqual = await bcrypt.compare(password, req.user.password);

    if (!isEqual)
      return res
        .status(401)
        .json({ message: "Login e-ou senha inválido, tente novamente!!!" });

    next();
  } catch (erro) {
    return res.status(400).json({ error: erro.message });
  }
};
