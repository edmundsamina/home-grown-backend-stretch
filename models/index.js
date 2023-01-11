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
