import express from "express";
import { getAllUsers, getUserAndPlotByFirebaseID, getAllPosts, getPostsByFirebaseID, createNewUser, deletePost,createNewPost, updatePost } from "../models/index.js";


export const publicrouter = express.Router();



publicrouter.get("/posts", async function (req, res) {
  const posts = await getAllPosts();
  res.status(200).json({
    success: true,
    payload: posts,
  });
});



//post router - registering users
publicrouter.post("/users", async function (req, res) {
  const newUser = await createNewUser(req.body);
  res.status(201).json({
    success: true,
    payload: newUser,
  });
});     


