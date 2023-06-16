
import { RootStore } from "../types";
import { Book,  State } from "./books.types";
export const getSlice = (store: RootStore): State => store.book;

export const getAdd = (store: RootStore): Book[] => store.book.basket;

export const getBasketLength = (store: RootStore): boolean => store.book.basket.length !==0;

export const getMyFavoriteLength = (store: RootStore): boolean => store.book.myfavorites.length !==0;

export const getAddMyFavorites = (store: RootStore): Book[] =>
  store.book.myfavorites;
  
export const getsetUser = (store: RootStore): State["user"] => store.book.user;

export const getIsProductInBasket = (store: RootStore): boolean =>
  !!store.book.basket.find(
    (item) => item.isbn13 === store.book.cardOne?.isbn13 
  );

export const getIsProductInMyFavorite = (store: RootStore): boolean =>
  !!store.book.myfavorites.find(
    (item) => item.isbn13 === store.book.cardOne?.isbn13
  );

export const getTotalPrices = (store: RootStore): number =>
  store.book.basket.reduce((total, item) => {
    const price = item.count * Number(item.price.slice(1));
    return total + price;
  }, 0);
