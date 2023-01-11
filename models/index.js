import { pool } from "../db/index.js";

export async function getAllUsers() {
  const sqlQuery = "SELECT * FROM users;";
  const result = await pool.query(sqlQuery);
  const users = result.rows;
  return users;
}