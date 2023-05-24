
import { FormValues } from "../../components/SignUp/SignUp";
import { RootStore } from "../types";
import { Book, Books, State } from "./books.types";
export const getSlice = (store: RootStore): State => store.book;

export const getAdd=(store:RootStore):Book[]=> store.book.basket


export const getAddMyFavorites=(store:RootStore):Book[]=> store.book.myfavorites
export const getAddUser=(store:RootStore):FormValues[]=> store.book.user


export const getIsProductInBasket=(store:RootStore):boolean=>!!store.book.basket.find((item)=>item.isbn13===store.book.cardOne?.isbn13)

export const getIsProductInMyFavorite=(store:RootStore):boolean=>!!store.book.myfavorites.find((item)=>item.isbn13===store.book.cardOne?.isbn13)

export const getTotalPrices=(store:RootStore):number=> store.book.basket.reduce((total,item)=>{
  const price=item.count *  Number(item.price.slice(1))
  return total+price
},0)