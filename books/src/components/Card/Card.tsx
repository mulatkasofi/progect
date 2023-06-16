import React from "react";

import { Book } from "../../store/books/books.types";
import styles from "./Card.module.css";
import Stars from "../Stars/Stars";
import { NavLink } from "react-router-dom";
interface BookProps {
  book: Book;
  link: string;
}

const BookOne: React.FC<BookProps> = ({ book, link }) => {
  return (
    <div className={styles.card}>
      <NavLink id={book.isbn13} to={link} style={{ textDecoration: "none" }}>
        <div className={styles.cardBackground}>
          <img src={book.image} alt="" className={styles.img} />
        </div>
        <p className={styles.title}>{book.title}</p>
      </NavLink>
      <p className={styles.text}>{book.subtitle}</p>
      <div className={styles.info}>
        <p className={styles.price}>{book.price}</p>
        <Stars post={book}></Stars>
      </div>
    </div>
  );
};
export default BookOne;
