import express from "express";
import { loginMiddleware } from "../middlewares/loginMiddleware.js";
// import { passwordHashMiddleware } from "../middlewares/passwordHashMiddleware.js";
import { loginController } from "../controllers/loginController.js";

export const login = express.Router();

login.post("/", loginMiddleware, loginController);
