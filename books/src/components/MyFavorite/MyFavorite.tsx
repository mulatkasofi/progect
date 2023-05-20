import React, { useEffect } from "react";
import { getAddMyFavorites } from "../../store/books/books.selectors";
import BasketItem from "../BasketItem/BasketItem";
import { useDispatch, useSelector } from "react-redux";

import {
  addMyFavorites, addMyFavoritesAll,
  
} from "../../store/books/books.reducer";
import MyFavoritesItem from "../MyFavoriteItem/MyFavoriteItem";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Title from "../Title/Title";
import { useDidUpdate } from "../../hooks/useDidUpdate";

const Myfavorite: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getAddMyFavorites);

  useEffect(() => {
    if (localStorage.getItem("myfavorites")) {
      dispatch(addMyFavoritesAll(JSON.parse(localStorage.getItem("myfavorites") as string)));
    }
  }, []);
  useDidUpdate(() => {
    localStorage.setItem("myfavorites", JSON.stringify(cart));
  }, [cart]);

 const breadcrumbs = [
   {
     link: "/",
   },
 ];
  return (
    <div>
      <BreadCrumbs breadcrumbs={breadcrumbs}></BreadCrumbs>
      <Title title="Favorites" ></Title>
      {cart?.map((post) => (
        <MyFavoritesItem
          myfavorites={post}
          key={post.isbn13}
        ></MyFavoritesItem>
      ))}
    </div>
  );
};

export default Myfavorite;
