import express from "express";
import { deleteUserController } from "../controllers/deleteUserController.js";
import { userIdMiddleware } from "../middlewares/userIdMiddleware.js";

export const deleteUser = express.Router();

deleteUser.delete("/:id", userIdMiddleware, deleteUserController);
