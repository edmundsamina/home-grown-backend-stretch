import { seedPostsTable } from "../helpers.js";
import { pool } from "../index.js";

try {
  await seedPostsTable();
  console.log("Seeded 'posts' table");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}