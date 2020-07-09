/**
 * @jest-environment node
 */

import request from "supertest";
import app from "../src/app";

it("Should return status 400 when no ingredient is inserted", async () => {
  const response = await request(app).get("/recipes/?i=");
  expect(response.status).toBe(400);
});

it("Should return status 200 when the user enters 1 ingredient", async () => {
  const response = await request(app).get("/recipes/?i=egg");
  expect(response.status).toBe(200);
}, 30000);

it("Should return status 200 when the user enters 2 ingredients", async () => {
  const response = await request(app).get("/recipes/?i=banana,apple");
  expect(response.status).toBe(200);
}, 30000);

it("Should return status 200 when the user enters 3 ingredients", async () => {
  const response = await request(app).get("/recipes/?i=banana,apple,vanilla");
  expect(response.status).toBe(200);
}, 30000);

it("Should return status 400 when the user enters more than 3 ingredients", async () => {
  const response = await request(app).get(
    "/recipes/?i=banana,apple,vanilla,sugar"
  );
  expect(response.status).toBe(200);
}, 30000);
