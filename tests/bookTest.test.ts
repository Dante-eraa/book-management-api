import request from "supertest";
import { app } from "../src/server";

describe("Book API", () => {
  // Testing fot create a new book
  it("should create a new book", async () => {
    const newBook = {
      title: "Test Book",
      author: "Test Author",
    };

    const response = await request(app).post("/books").send(newBook);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe(newBook.title);
    expect(response.body.author).toBe(newBook.author);
  });
});
