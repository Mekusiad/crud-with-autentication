import { User } from "../models/User.js";

export const putUserController = async (req, res) => {
  const { id, name, email, phone } = req.body;

  try {
    const user = await User.updateOne(
      { _id: res.user.id },
      { $set: { email: email, updated_at: new Date() } }
    );

    return res
      .status(200)
      .json({ message: "Usuário atualizado com sucesso!!" });
  } catch (error) {
    return res.status(500).json({ message: "Ops!!! Algo deu errado." });
  }
};
