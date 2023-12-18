import express from "express";

import { getUsersController } from "../controllers/getUsersController.js";

export const getUsers = express.Router();

getUsers.get("/", getUsersController);
