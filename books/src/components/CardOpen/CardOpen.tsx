import React, { useEffect, useMemo, useState } from "react";
import styles from "./CardOpen.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../../store/books/books.selectors";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import CardOpenItem from "../CardOpenItem/CardOpenItem";
import { getBooks } from "../../api/books";
import { getBook } from "../../api/book";
import { resetBook, setBook} from "../../store/books/books.reducer";
import shuffle from "lodash.shuffle";
import BookOne from "../Card/Card";
import { Book } from "../../store/books/books.types";
import Subscribe from "../Subscribe/Subscribe";
import Title from "../Title/Title";
import faceBook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";
import pre from "../../img/Up 2.png";
import next from "../../img/Up.png";


const CardOpen: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cardOne } = useSelector(getSlice);

  useEffect(() => {
    if (!id) return () => {};

    getBook(id).then((book) => {
      dispatch(setBook(book));
    });

    return () => dispatch(resetBook());
  }, [dispatch, id]);

  const breadcrumbs = [
    {
      link: "/",
    },
  ];
  const [cards, setCard] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then((data) => {
      setCard(data.books);
    });
  }, []);

  const randomArticles = useMemo(
    () => shuffle(cards).slice(0, 10),
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
    <>
      <div className={styles.wrapper}>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        {cardOne && <CardOpenItem post={cardOne} />}
        <div className={styles.socialMedia}>
          <NavLink to={"https://www.facebook.com/"}>
            {" "}
            <img src={faceBook} alt="" />{" "}
          </NavLink>
          <NavLink to={"https://twitter.com/?lang=ru"}>
            {" "}
            <img src={twitter} alt="" />{" "}
          </NavLink>
        </div>
        <Subscribe title={"Subscribe to Newsletter"} />
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
    </>
  );
};

export default CardOpen;
