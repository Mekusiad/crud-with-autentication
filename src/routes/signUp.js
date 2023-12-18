import express from "express";
import { signUpController } from "../controllers/signUpController.js";
import { userEmailMiddleware } from "../middlewares/userEmailMiddleware.js";

export const signUp = express.Router();

signUp.post("/", userEmailMiddleware, signUpController);
