import React, { useEffect, useState } from "react";
import { Book } from "../../store/books/books.types";
import styles from "./BasketItem.module.css";
import del from "../../img/Frame 1578.png";
import Title from "../Title/Title";
import minus from "../../img/Frame 1579.png";
import plus from "../../img/Frame 1580.png";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCount,
  resetBasket,
  resetBook,
  decrementCount,
} from "../../store/books/books.reducer";

export interface BasketProps {
  baskets: Book;
  index: number;
}

const BasketItem: React.FC<BasketProps> = ({ baskets}) => {
  const dispatch = useDispatch();
  const increment = () => {
    console.log(baskets.count);
    dispatch(incrementCount(baskets.isbn13));
    
  };

  const decremet = () => {
    if (baskets.count === 1) {
      dispatch(resetBasket(baskets.isbn13));
      
      
    } else {
      dispatch(decrementCount(baskets.isbn13));
      console.log(baskets.count);
    }
  };

  const pri = `$${(baskets.count * Number(baskets.price.slice(1))).toFixed(2)}`;


  const handleReset = () => {
    dispatch(resetBasket(baskets.isbn13));
  };

  return (
    <>
      <div className={styles.all}>
        <div className={styles.information}>
          <div className={styles.cardBackground}>
            <img src={baskets.image} alt="" className={styles.img} />
          </div>
          <div className={styles.margin}>
            <p className={styles.title}>{baskets.title}</p>
            <p className={styles.text}>{baskets.subtitle}</p>
            <div className={styles.count}>
              <button className={styles.icon} onClick={increment}>
                <img src={minus} alt="" />
              </button>
              <p className={styles.number}>{baskets.count}</p>
              <button className={styles.icon} onClick={decremet}>
                <img src={plus} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <p className={styles.price}>{pri}</p>
          <button className={styles.delete} onClick={handleReset}>
            <img src={del} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
export default BasketItem;
