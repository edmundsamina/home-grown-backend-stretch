import express from "express";
import { getAllUsers, getUserAndPlotByFirebaseID, getAllPosts, getPostsByFirebaseID, createNewUser, deletePost,createNewPost } from "../models/index.js";


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


router.get("/posts/:id", async function (req, res) {
  const firebase_id = req.params.id
  const posts = await getPostsByFirebaseID(firebase_id);
  res.status(200).json({
    success: true,
    payload: posts,
  });
});

//post router - registering users
router.post("/users", async function (req, res) {
  const newUser = await createNewUser(req.body);
  res.status(201).json({
    success: true,
    payload: newUser,
  });
});     


router.delete("/posts/:id", async function (req, res) {
  const id = req.params.id
  const deletedPost = await deletePost(id);
  res.status(201).json({
    success: true,
    payload: deletedPost,
  });
});     



//post router - create new post
router.post("/posts", async function (req, res) {
  let postData = req.body
  const newPost = await createNewPost(postData);
  res.status(201).json({
    success: true,
    payload: newPost,
  });
});     


//patch router - update post
router.patch("/posts/:id", async function (req, res) {
  let postID = req.params.id
  let postBody = req.body
  const updatedPost = await updatePost(postID, postBody);
  res.status(201).json({
    success: true,
    payload: updatedPost,
  });
});     