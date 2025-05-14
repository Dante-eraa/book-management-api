import { Book } from "../models/book";
import { v4 as uuidv4 } from "uuid";

const books: Book[] = [];

export const getBooks = () => books;

export const getBookById = (id: string) => books.find((b) => b.id === id);

export const addBook = (book: Omit<Book, "id">) => {
  const newBook = { ...book, id: uuidv4() };
  books.push(newBook);
  return newBook;
};

export const updateBook = (id: string, updatedBook: Omit<Book, "id">) => {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return null;
  books[index] = { ...books[index], ...updatedBook };
  return books[index];
};

export const deleteBook = (id: string) => {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
};

export const importBooks = (newBooks: Book[]) => {
  newBooks.forEach((book) => {
    if (!books.some((b) => b.id === book.id)) {
      books.push(book);
    }
  });
};
