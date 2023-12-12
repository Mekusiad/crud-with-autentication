import express from "express";
import { deleteUserController } from "../controllers/deleteUserController.js";

export const deleteUser = express.Router();

deleteUser.delete("/:id", deleteUserController);
