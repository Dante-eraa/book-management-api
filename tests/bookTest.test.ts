import request from "supertest";
import { app } from "../src/server"; // Path to your server

describe("Book API", () => {
  // Test for creating a new book
  it("should create a new book", async () => {
    const newBook = {
      title: "Test Book",
      author: "Test Author",
    };

    const response = await request(app).post("/books").send(newBook);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id"); // Book should have an id
    expect(response.body.title).toBe(newBook.title); // Title should match
    expect(response.body.author).toBe(newBook.author); // Author should match
  });
});
