import express from "express";
import { updatePlots, getAllUsers, getUserAndPlotByFirebaseID, getAllPosts, getPostsByFirebaseID, createNewUser, deletePost,createNewPost, updatePost, getAllMessagesByUser } from "../models/index.js";


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



//get all messages

publicrouter.get("/messages/:id", async function (req, res) {
  const messages = await getAllMessagesByUser(req.params.id);
  res.status(200).json({
    success: true,
    payload: messages,
  });
});


