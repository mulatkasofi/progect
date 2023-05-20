
import React from "react";

import { Books } from "../../store/books/books.types";
import styles from "./Card.module.css";
import Stars from "../Stars/Stars";
import { NavLink } from "react-router-dom";
interface BookProps {
  book: Books;
  link: string;
  
}

const BookOne: React.FC<BookProps> = ({
  book: { title, subtitle, image, isbn13, price, url },
  link,
}) => {
  return (
    <>
      <NavLink
        className={styles.card}
        id={isbn13}
        to={link}
        style={{ textDecoration: "none" }}
        
      >
        <div className={styles.cardBackground} >
          <img src={image} alt="" className={styles.img} />
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{subtitle}</p>
        <div className={styles.info}>
          <p className={styles.price}>{price}</p>
          <Stars ></Stars>
        </div>
      </NavLink>
    </>
  );
};
export default BookOne;
