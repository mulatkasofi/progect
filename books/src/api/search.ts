import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book, Books, BooksAll } from "../store/books/books.types";
import { getSlice } from "../store/books/books.selectors";
import { RootStore } from "../store/types";

export const getSearch = async (page:number,query:string): Promise<BooksAll> => {
    const res = await fetch(`https://api.itbook.store/1.0/search/${query}/${page}`);
    
  const data = await res.json();
  return data;
};


