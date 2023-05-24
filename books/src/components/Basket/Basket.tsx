import React, { useEffect, useState } from "react";
import { getAdd, getTotalPrices } from "../../store/books/books.selectors";
import BasketItem from "../BasketItem/BasketItem";
import { useDispatch, useSelector } from "react-redux";

import {
  addBooks,
  resetBaskets,
  resetBook,
  setBook,
  setList,
} from "../../store/books/books.reducer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Title from "../Title/Title";
import { Book } from "../../store/books/books.types";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import styles from './Basket.module.css'

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
const handleDelete=()=>{
  dispatch(resetBaskets())
}
  return (
    <div>
      <BreadCrumbs breadcrumbs={breadcrumbs}></BreadCrumbs>
      <Title title="Your cart"></Title>
      {cart?.map((post, index) => (
        <BasketItem baskets={post} index={index} key={post.isbn13}></BasketItem>
      ))}
      <div className={styles.price}>
      <div className={styles.info}>
        <p className={styles.total}>Total:</p>
        <p className={styles.totalPrice}>${totalPrice.toFixed(2)}</p>
      </div>
      <button className={styles.check} onClick={handleDelete}>Check out</button>
    </div>
    </div>
  );
};

export default Basket;
