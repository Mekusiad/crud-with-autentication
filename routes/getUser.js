import express from "express";
import { getUserController } from "../controllers/getUserController.js";

export const getUser = express.Router();

getUser.get("/:id", getUserController);
