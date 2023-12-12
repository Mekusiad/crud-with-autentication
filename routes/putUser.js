import express from "express";
import { putUserController } from "../controllers/putUserController.js";
import { userIdMiddleware } from "../middlewares/userIdMiddleware.js";

export const putUser = express.Router();

putUser.put("/:id", userIdMiddleware, putUserController);
