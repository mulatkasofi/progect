import { Book, Books, BooksAll } from "../store/books/books.types";

export const getBook = async (id: Book['isbn13']): Promise<Book> => {
    const res = await fetch(`https://api.itbook.store/1.0/books/${id}`);
  const data = await res.json();
  return data;
};