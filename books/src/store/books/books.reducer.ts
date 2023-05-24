import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State, Books, BooksAll, Book } from "./books.types";
import { act } from "react-dom/test-utils";
import { stat } from "fs";
import { queries } from "@testing-library/react";


const initialState: State = {
  card: [],
  searchValue: "",
  cardOne: null,
  basket:[],
  myfavorites:[],
  page:1,
  user:[],
  query:'',
  newBooks:[]
};
const step = 1;

const book= createSlice({
  name: "book",
  initialState,
  reducers: {

       increaseOffset: (state) => {
      state.page += step;
      
        
    },
      decreaseOffset: (state) => {
      state.page -= step;
      
        
    },
    setList: (state, action: PayloadAction<Book[]>) => {
      state.card = state.card.concat(action.payload);
    },
    
    setQueryValue:(state, action: PayloadAction<string>)=>{
      state.query=action.payload
    },
    resetPage:(state)=>{
      state.page=initialState.page
    }, 
    resetBooksAll:(state)=>{
      state.newBooks=[]
    } ,
    setBook: (state, action: PayloadAction<Book>) => {
      state.cardOne = action.payload;
    },
    resetBook: (state) => {
      state.cardOne = null;
    },
    resetBaskets:(state)=>{
      state.basket=[]
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.basket = [...state.basket, action.payload];
      console.log(state.basket);
      
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
      addUser: (state, action: PayloadAction<State['user']>) => {
      state.user=action.payload
    },
    resetBasket: (state, action: PayloadAction<Book['isbn13']>) => {
       let post = state.basket.find((post) => post.isbn13===action.payload);
      if (post) {
        state.basket = state.basket.filter((product) => product.isbn13 !== action.payload);
      }
    },
    resetMyFavorites: (state, action: PayloadAction<Book['isbn13']>) => {
       let post = state.myfavorites.find((post) => post.isbn13===action.payload);
      if (post) {
        state.myfavorites = state.myfavorites.filter((product) => product.isbn13 !== action.payload);
      }
    },
    incrementCount:(state, action: PayloadAction<Book['isbn13']>)=>{
       let post = state.basket.find((post) => post.isbn13===action.payload);
       if(post){
        post.count+=1
       }
    },
     decrementCount:(state, action: PayloadAction<Book['isbn13']>)=>{
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
decreaseOffset,
  incrementCount,
  decrementCount,
  addUser,
  resetBaskets,
  resetPage,
  setQueryValue,
  resetBooksAll

} = book.actions;
 
export default book.reducer;
