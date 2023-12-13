import { validate as isUuid } from "uuid";

import { User } from "../models/User.js";

export const userIdMiddleware = async (req, res, next) => {
  const { id } = req.params;

  if (!isUuid(id)) return res.status(400).json({ message: "Invalid ID" });

  try {
    const user = await User.findById(id);
    res.user = user;
    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado!!!" });
  } catch (erro) {
    return res.status(500).json({ error: erro.message });
  }

  next();
};
