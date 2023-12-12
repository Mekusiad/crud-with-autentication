import bcrypt from "bcrypt";

export const passwordHashMiddleware = async (req, res, next) => {
  const { password } = req.body;

  const isEqual = await bcrypt.compare(password, req.user.password);

  if (!isEqual)
    return res
      .status(401)
      .json({ message: "Login e-ou senha inválido, tente novamente!!!" });

  next();
};
