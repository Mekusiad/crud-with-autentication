import express from "express";
import { putUserController } from "../controllers/putUserController.js";
import { userIdMiddleware } from "../middlewares/userIdMiddleware.js";
import { userEmailMiddleware } from "../middlewares/userEmailMiddleware.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

export const putUser = express.Router();

putUser.put(
  "/:id",
  verifyTokenMiddleware,
  userIdMiddleware,
  userEmailMiddleware,
  putUserController
);
