import express from "express";
import bodyParser from "body-parser";

import { signUp } from "./routes/signUp.js";
import { login } from "./routes/login.js";
import { getUsers } from "./routes/getUsers.js";
import { getUser } from "./routes/getUser.js";
import { putUser } from "./routes/putUser.js";
import { deleteUser } from "./routes/deleteUser.js";

export const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Header",
    "Origin",
    "Authorization",
    "Content-Type",
    "X-Requested-With"
  );

  if (req.method === "OPTIONS") {
    res.header("Acess-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).send({});
  }

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

  return res.send({ message: error.message });
});
