import { Book } from "../models/book";
import { v4 as uuidv4 } from "uuid";

export const parseCSV = async (buffer?: Buffer) => {
  const data = buffer?.toString("utf-8").split("\n") || [];
  const added: Book[] = [];
  const errors: string[] = [];

  for (let i = 1; i < data.length; i++) {
    const row = data[i].trim();
    if (!row) continue;
    const [title, author, publishedYear] = row.split(",");

    if (!title || !author || isNaN(Number(publishedYear))) {
      errors.push(`Invalid row ${i + 1}`);
      continue;
    }

    added.push({
      id: uuidv4(),
      title,
      author,
      publishedYear: Number(publishedYear),
    });
  }

  return { added, errors };
};
