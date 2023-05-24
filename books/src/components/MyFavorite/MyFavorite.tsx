import React, { useEffect, useMemo, useState } from "react";
import { getAddMyFavorites } from "../../store/books/books.selectors";
import BasketItem from "../BasketItem/BasketItem";
import { useDispatch, useSelector } from "react-redux";

import {
  addMyFavorites, addMyFavoritesAll, setList,
  
} from "../../store/books/books.reducer";
import MyFavoritesItem from "../MyFavoriteItem/MyFavoriteItem";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Title from "../Title/Title";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import { Book } from "../../store/books/books.types";
import { getBooks } from "../../api/books";
import shuffle from "lodash.shuffle";
import { useParams } from "react-router-dom";
import styles from './MyFavorite.module.css'
import pre from "../../img/Up 2.png";
import next from "../../img/Up.png";
import BookOne from "../Card/Card";
const Myfavorite: React.FC = () => {
  const dispatch = useDispatch();
    const { id } = useParams();
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
 const [cards, setCard] = useState<Book[]>([]);

 useEffect(() => {
   getBooks().then((data) => {
     setCard(data.books);
     setList(data.books);
   });
 }, []);

 const randomArticles = useMemo(
   () => shuffle(cards).slice(0, 10),
   // eslint-disable-next-line react-hooks/exhaustive-deps
   [cards, id]
 );

 const [[start, end], setSlide] = useState([0, 3]);

 const handleNext = () => {
   if (end === 10) return;
   const nextStart = start + 1;
   const nextEnd = end + 1;
   setSlide([nextStart, nextEnd]);
 };
 const handlePrev = () => {
   if (start === 0) return;
   const nextStart = start - 1;
   const nextEnd = end - 1;
   setSlide([nextStart, nextEnd]);
 };


  return (
    <div>
      <BreadCrumbs breadcrumbs={breadcrumbs}></BreadCrumbs>
      <Title title="Favorites"></Title>
      {cart?.map((post) => (
        <MyFavoritesItem myfavorites={post} key={post.isbn13}></MyFavoritesItem>
      ))}
      <div className={styles.title}>
        <Title title={"New Books"}></Title>
        <div className={styles.navig}>
          <button
            className={styles.nav}
            onClick={handlePrev}
            disabled={start === 0}
          >
            <img src={pre} alt="" />
          </button>
          <button
            className={styles.nav}
            onClick={handleNext}
            disabled={end === 10}
          >
            <img src={next} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.display}>
        {randomArticles.slice(start, end).map((book) => (
          <BookOne
            book={book}
            link={`/books/${book.isbn13}`}
            key={book.isbn13}
          ></BookOne>
        ))}
      </div>
    </div>
  );
};

export default Myfavorite;
