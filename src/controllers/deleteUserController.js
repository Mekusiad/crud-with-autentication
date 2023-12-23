import { User } from "../models/User.js";

export const deleteUserController = async (req, res) => {
  try {
    const userDelete = await User.deleteOne({ _id: res.user.id });

    return res.status(200).send({ message: "Usuário deletado com sucesso!!!" });
  } catch (erro) {
    return res.status(400).json({ error: erro.message });
  }
};
