import supertest from "supertest";
import { test, expect } from "@jest/globals"
import { pool } from "../db/index.js";
// import { response } from "express";
import app from "../app.js"










// delete post by id

test("DELETE /posts/:id", async function () {

 const idToDelete = 4;
 
 const res = await supertest(app).del(`/posts/${idToDelete}`);

 expect(res.status).toBe(200);

 expect(res.body).toStrictEqual({
    success : true,
    payload: {
        id: idToDelete,
        plot_id: expect.any(Number),
        firebase_id: expecstringt.any(String),
	    title: expect.any(String),
	    description: expect.any(String),
	    date: expect.any(String),
	    crop_id: expect.any(Number),
  	    project_started: expect.any(Boolean),
        help_wanted: expect.any(Boolean),
	    percentage_of_plot: expect.any(Number),
    }
 })

console.log(res.body)
})

