// import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

import { User } from "../models/User.js";

dotenv.config();

export const signUpController = async (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!email)
    return res
      .status(422)
      .json({ message: "Email obrigatório, tente novamente!!!" });

  if (!name)
    return res
      .status(401)
      .json({ message: "Nome obrigatório, tente novamente!!!" });

  if (!password)
    return res
      .status(401)
      .json({ message: "Senha obrigatório, tente novamente!!!" });

  if (!phone)
    return res
      .status(401)
      .json({ message: "Telefone obrigatório, tente novamente!!!" });

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  // const jwToken = jwt.sign({ email: email }, process.env.JWT_KEY, {
  //   expiresIn: "0.5h",
  // });

  const user = {
    _id: uuidv4(),
    name: name,
    email: email,
    // token: jwToken,
    password: hashPassword,
    created_at: new Date(),
    updated_at: new Date(),
    last_login: new Date(),
    phone: phone,
  };

  try {
    await User.create(user);
    const { _id, created_at, updated_at, last_login, token } = user;
    const showUser = { _id, created_at, updated_at, last_login, token };
    return res
      .status(201)
      .json({ message: "Usuário cadastrado com sucesso!!!", showUser });
  } catch (erro) {
    return res.status(500).json({ error: erro });
  }
};
