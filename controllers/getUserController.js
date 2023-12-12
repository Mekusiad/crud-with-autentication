import { User } from "../models/User.js";

export const getUserController = async (req, res) => {
  try {
    const { _id } = req.params;

    const user = await User.find({ _id: _id }, "-password -__v");

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
};
