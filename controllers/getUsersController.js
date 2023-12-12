import { User } from "../models/User.js";

export const getUsersController = async (req, res) => {
  try {
    const user = await User.find({}, "-password -__v");
    if (user.length === 0)
      return res
        .status(404)
        .json({ message: "Não há usuários cadastrados..." });

    return res.status(200).json({ user });
  } catch (erro) {
    return res.status(500).json({ message: erro.message });
  }
};
