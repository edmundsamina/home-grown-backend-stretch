import { resetPostsTable } from "../helpers.js";
import { pool } from "../index.js";


try {
  await resetPostsTable();
  console.log("Dropped, re-created and re-seeded 'SW' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}