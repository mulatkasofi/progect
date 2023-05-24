import React, { useEffect, useMemo, useState } from "react";
import styles from "./Blog.module.css";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
// import {fakeRequestForCard} from "./FakeReqest/FakeReqest";
import { getSlice } from "../../store/books/books.selectors";
import { Book, Books, BooksAll } from "../../store/books/books.types";
import Title from "../Title/Title";
import { getBooks } from "../../api/books";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

import {
  decreaseOffset,
  increaseOffset,
  resetBook,
  resetBooksAll,
  resetPage,
  setBook,
  setList,
} from "../../store/books/books.reducer";
import LoadMore from "../LoadMore/LoadMore";

import { useDidUpdate } from "../../hooks/useDidUpdate";
import { AppDispatch } from "../../store";
import { getSearch } from "../../api/search";

const Blog: React.FC = () => {
  const [cards, setCard] = useState<Book[]>([]);
  const dispatch = useDispatch();
  const { page, query,newBooks } = useSelector(getSlice);

  // const [num, setNum] = useState(12);

  const handleIncreace = () => {
    dispatch(increaseOffset());
  };

  useDidUpdate(() => {
    getSearch(page, query).then((data) => {
      setCard((prevCard) => [...prevCard, ...data.books]);

      // setList(data.books);
    });
  }, [page]);

  useDidUpdate(() => {
    if (cards.length === 0 && query) {
      getSearch(page, query).then((data) => {
        setCard((prevCard) => [...prevCard, ...data.books]);
      console.log(cards);
      
      });
    } else {
      dispatch(resetPage());
    }
  }, [query, page]);
  useEffect(() => {
    if (newBooks.length === 0) {
      getBooks().then((data) => {
        setCard(data.books);
        setList(data.books);
      });
    }
    dispatch(resetBooksAll());
  }, [query, dispatch]);

  return (
    <>
      <div className={styles.all}>
        <Title title="New Releases Books" />
        <div>
          <div className={styles.cardDisplay}>
            {cards?.map((book, index) => {
              return (
                <Card
                  book={book}
                  key={book.isbn13}
                  link={`/books/${book.isbn13}`}
                />
              );
            })}
          </div>
          <LoadMore setLoading={handleIncreace} text={"Load More"}></LoadMore>

          <Subscribe title={"Subscribe to Newsletter"} />

          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Blog;
