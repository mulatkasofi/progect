import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State, Books, BooksAll, Book } from "./books.types";
import { act } from "react-dom/test-utils";
import { stat } from "fs";


const initialState: State = {
  card: [],
  searchValue: "",
  cardOne: null,
  basket:[],
  myfavorites:[],
  page:1
};
const step = 1;

const book= createSlice({
  name: "book",
  initialState,
  reducers: {

       increaseOffset: (state) => {
      state.page += step;
      
        
    },
    setList: (state, action: PayloadAction<Books[]>) => {
      state.card = state.card.concat(action.payload);
    },
    
  
    setBook: (state, action: PayloadAction<Book>) => {
      state.cardOne = action.payload;
    },
    resetBook: (state) => {
      state.cardOne = null;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.basket = [...state.basket, action.payload];
      
    },
    addMyFavorites: (state, action: PayloadAction<Book>) => {
      state.myfavorites = [...state.myfavorites, action.payload];
    },
     addBooks: (state, action: PayloadAction<Book[]>) => {
      state.basket=action.payload
      
    },
     addMyFavoritesAll: (state, action: PayloadAction<Book[]>) => {
      state.myfavorites=action.payload
    },
    resetBasket: (state, action: PayloadAction<Books['isbn13']>) => {
       let post = state.basket.find((post) => post.isbn13===action.payload);
      if (post) {
        state.basket = state.basket.filter((product) => product.isbn13 !== action.payload);
      }
    },
    resetMyFavorites: (state, action: PayloadAction<Books['isbn13']>) => {
       let post = state.myfavorites.find((post) => post.isbn13===action.payload);
      if (post) {
        state.myfavorites = state.myfavorites.filter((product) => product.isbn13 !== action.payload);
      }
    },
    incrementCount:(state, action: PayloadAction<Books['isbn13']>)=>{
       let post = state.basket.find((post) => post.isbn13===action.payload);
       if(post){
        post.count+=1
       }
    },
     decrementCount:(state, action: PayloadAction<Books['isbn13']>)=>{
       let post = state.basket.find((post) => post.isbn13===action.payload);
       if(post ){
        post.count-=1
       }
    },

  

}
 
});

export const {
  setList,
  setBook,
  resetBook,
  addBook,
  resetBasket,
  addBooks,
  resetMyFavorites,
  addMyFavorites,
  addMyFavoritesAll,
  increaseOffset,

  incrementCount,
  decrementCount

} = book.actions;
 
export default book.reducer;
