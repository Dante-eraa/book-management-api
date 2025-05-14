import { Request, Response, NextFunction } from "express";
import * as service from "../services/bookService";
import { parseCSV } from "../utils/csvParser";

export const getAllBooks = (req: Request, res: Response) => {
  res.json(service.getBooks());
};

export const getBook = (req: Request, res: Response, next: NextFunction) => {
  const book = service.getBookById(req.params.id);
  if (!book) return next(new Error("Book not found"));
  res.status(200).json(book);
};

export const createBook = (req: Request, res: Response) => {
  const { title, author, publishedYear } = req.body;
  const book = service.addBook({ title, author, publishedYear });
  res.status(201).json(book);
};

export const updateBook = (req: Request, res: Response, next: NextFunction) => {
  const updated = service.updateBook(req.params.id, req.body);
  if (!updated) return next(new Error("Book not found"));
  res.json(updated);
};

export const deleteBook = (req: Request, res: Response, next: NextFunction) => {
  const deleted = service.deleteBook(req.params.id);
  if (!deleted) return next(new Error("Book not found"));
  res.status(204).send();
};

export const importBooks = async (req: Request, res: Response) => {
  const { added, errors } = await parseCSV(req.file?.buffer);
  service.importBooks(added);
  res.json({ added: added.length, errors });
};
