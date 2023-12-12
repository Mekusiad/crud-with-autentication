import express from "express";
import { loginController } from "../controllers/loginController.js";

export const login = express.Router();

login.post("/", loginController);
