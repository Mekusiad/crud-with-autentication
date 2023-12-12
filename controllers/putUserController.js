import { User } from "../models/User.js";

export const putUserController = async (req, res) => {
  const { _id, name, email, phone } = req.body;

  // if (!name || !email || !phone)
  //   return res.status(400).json({ message: "Missing name or email or phone" });

  try {
    // if (name) req.user.name = name;
    // if (email) req.user.email = email;
    // if (phone) req.user.phone = phone;

    const user = await User.updateOne({ _id: _id }, { $set: { email: email } });
    return res
      .status(200)
      .json({ message: "Usuário atualizado com sucesso!!" });
  } catch (error) {
    return res.status(500).json({ message: "Ops!!! Algo deu errado." });
  }
};
