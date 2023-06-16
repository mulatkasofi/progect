
import {  BooksAll } from "../store/books/books.types";


export const getBooks = async (): Promise<BooksAll> => {
  const res = await fetch(`https://api.itbook.store/1.0/new`);
  const data = await res.json();
  return data;
};
