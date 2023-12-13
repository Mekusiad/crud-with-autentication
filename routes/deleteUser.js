import express from "express";
import { deleteUserController } from "../controllers/deleteUserController.js";
import { userIdMiddleware } from "../middlewares/userIdMiddleware.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

export const deleteUser = express.Router();

deleteUser.delete(
  "/:id",
  verifyTokenMiddleware,
  userIdMiddleware,
  deleteUserController
);
