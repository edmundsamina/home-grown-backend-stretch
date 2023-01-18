import { pool } from "../db/index.js";

export async function getAllUsers() {
  const sqlQuery = "SELECT * FROM users;";
  const result = await pool.query(sqlQuery);
  const users = result.rows;
  return users;
}


export async function getUserAndPlotByFirebaseID(firebase_id) {
    const sqlQuery =   'SELECT u.user_id, u.firebase_id, u.profile_picture, u.first_name, u.last_name, u.email, u.username, u.rating, p.plot_id, p.plot_size, p.percentage_used, p.plot_image, p.location FROM users u INNER JOIN plots p ON u.firebase_id = p.firebase_id WHERE u.firebase_id = $1;';
    const sqlDependency = [firebase_id];
    const result = await pool.query(sqlQuery, sqlDependency);
    const user = result.rows;
    return user;
  }

  export async function getAllPosts() {
    const sqlQuery =   'SELECT * FROM posts INNER JOIN users ON posts.firebase_id = users.firebase_id INNER JOIN plots ON posts.plot_id = plots.plot_id INNER JOIN crops ON posts.crop_id = crops.crop_id;';
    const result = await pool.query(sqlQuery);
    const posts = result.rows;
    return posts;
  }


  export async function getPostsByFirebaseID(firebase_id) {
    const sqlQuery =   'SELECT * FROM posts INNER JOIN users ON posts.firebase_id = users.firebase_id INNER JOIN plots ON posts.plot_id = plots.plot_id INNER JOIN crops ON posts.crop_id = crops.crop_id WHERE posts.firebase_id = $1;';
    const sqlDependency = [firebase_id];
    const result = await pool.query(sqlQuery, sqlDependency);
    const posts = result.rows;
    return posts;
  }

  export async function createNewUser(body){
    const sqlQuery = `WITH step_one AS ( INSERT INTO users (firebase_id, profile_picture, first_name, last_name, email, username, rating) VALUES ($1, $2, $3, $4, $5, $6, $7)) INSERT INTO plots (firebase_id) VALUES ($1)`;
    const sqlDependency = [body.firebase_id, body.profile_picture, body.first_name, body.last_name, body.email, body.username, body.rating];
    const result =  await pool.query(sqlQuery, sqlDependency);
    const newUser = result.rows
    return newUser;
}

export async function deletePost(id){
  const sqlQuery = `DELETE FROM posts WHERE posts_id = $1 RETURNING *`;
  const sqlDependency = [id];
  const result =  await pool.query(sqlQuery, sqlDependency);
  const deleteUser = result.rows
  return deleteUser;
}


export async function createNewPost(data){
  const sqlQuery = `INSERT INTO posts (plot_id, firebase_id, title, description, date, crop_id, percentage_of_plot) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * `;
  const sqlDependency = [data.plot_id, data.firebase_id, data.title, data.description, data.date, data.crop_id, data.percentage_of_plot];
  const result =  await pool.query(sqlQuery, sqlDependency);
  const newPost = result.rows
  return newPost;
}


export async function updatePost(id, data){
  const sqlQuery = `UPDATE posts SET title = $2, description=$3, crop_id=$4, percentage_of_plot=$5 WHERE posts_id = $1 RETURNING *`;
  const sqlDependency = [id, data.title, data.description, data.crop_id, data.percentage_of_plot];
  const result =  await pool.query(sqlQuery, sqlDependency);
  const postData = result.rows
  return postData;
}
