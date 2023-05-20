import React, { useEffect, useState } from "react";
import { getAdd, getTotalPrices } from "../../store/books/books.selectors";
import BasketItem from "../BasketItem/BasketItem";
import { useDispatch, useSelector } from "react-redux";

import {
  addBooks,
  resetBook,
  setBook,
  setList,
} from "../../store/books/books.reducer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Title from "../Title/Title";
import { Book } from "../../store/books/books.types";
import { useDidUpdate } from "../../hooks/useDidUpdate";

const Basket: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getAdd);
 const totalPrice=useSelector(getTotalPrices)
  useEffect(() => {
    if (localStorage.getItem("cards")) {
      dispatch(addBooks(JSON.parse(localStorage.getItem("cards") as string)));
    }
  }, []);

  useDidUpdate(() => {

    localStorage.setItem("cards", JSON.stringify(cart));
  }, [cart]);

  const breadcrumbs = [
    {
      link: "/",
    },
  ];

  return (
    <div>
      <BreadCrumbs breadcrumbs={breadcrumbs}></BreadCrumbs>
      <Title title="Your cart"></Title>
      {cart?.map((post, index) => (
        <BasketItem baskets={post} index={index} key={post.isbn13}></BasketItem>
      ))}
      {totalPrice}
    </div>
  );
};

export default Basket;
