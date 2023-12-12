import express from "express";
import { getUserController } from "../controllers/getUserController.js";
import { userIdMiddleware } from "../middlewares/userIdMiddleware.js";

export const getUser = express.Router();

getUser.get("/:id", userIdMiddleware, getUserController);
