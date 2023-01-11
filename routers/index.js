import express from "express";
import { getAllUsers, getUserAndPlotByFirebaseID, getAllPosts } from "../models/index.js";


export const router = express.Router();

router.get("/users", async function (req, res) {
  const users = await getAllUsers();
  res.status(200).json({
    success: true,
    payload: users,
  });
});

router.get("/users/:id", async function (req, res) {
  const firebase_id = req.params.id;
  const users = await getUserAndPlotByFirebaseID(firebase_id);
  res.status(200).json({
    success: true,
    payload: users,
  });
});

router.get("/posts", async function (req, res) {
  const posts = await getAllPosts();
  res.status(200).json({
    success: true,
    payload: posts,
  });
});
