import express from "express";
import { getAllUsers } from "../models/index.js";

export const router = express.Router();

router.get("/users", async function (req, res) {
  const users = await getAllUsers();
  res.status(200).json({
    success: true,
    payload: users,
  });
});
