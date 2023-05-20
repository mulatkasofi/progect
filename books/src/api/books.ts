import img1 from "../../../img/image 9.png";
import img2 from "../../../img/image 9 (1).png";
import { Books, BooksAll } from "../store/books/books.types";
import { log } from "console";

export const getBooks = async (): Promise<BooksAll> => {
  const res = await fetch(`https://api.itbook.store/1.0/new`);
  const data = await res.json();
  return data;
};