import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { Database } from "./database/index.js";
import { signUp } from "./routes/signUp.js";
import { login } from "./routes/login.js";
import { getUsers } from "./routes/getUsers.js";
import { getUser } from "./routes/getUser.js";
import { putUser } from "./routes/putUser.js";
import { deleteUser } from "./routes/deleteUser.js";

dotenv.config();

export const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/signUp", signUp);
app.use("/login", login);
app.use("/getUsers", getUsers);
app.use("/getUser", getUser);
app.use("/putUser", putUser);
app.use("/deleteUser", deleteUser);

app.use((req, res, next) => {
  const erro = new Error("Route not Found.");
  erro.status = 404;

  next(erro);
});

app.use((error, req, res) => {
  res.status(error.status || 500);

  return res.send({ message: "server" + error.message });
});

app.listen(port, () => {
  Database();
  console.log(`Server is running on port ${port}`);
});
