import React, { useEffect } from "react";
import styles from "./Blog.module.css";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getSlice } from "../../store/books/books.selectors";
import Title from "../Title/Title";
import { getBooks } from "../../api/books";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";
import {
  increaseOffset,
  resetCard,
  resetPage,
  setList,
  setNewBook,
} from "../../store/books/books.reducer";
import LoadMore from "../LoadMore/LoadMore";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import { getSearch } from "../../api/search";


const Blog: React.FC = () => {
  const dispatch = useDispatch();
  const { page, query, card, newBooks } = useSelector(getSlice);

  const handleIncreace = () => {
    dispatch(increaseOffset());
  };
  useDidUpdate(() => {
    if (query) {
      getSearch(page, query).then((data) => {
        dispatch(setList(data.books));
        console.log(page);
      });
    } else {
      dispatch(resetPage());
    }
  }, [query, page]);

  useEffect(() => {
    if (query.length === 0) {
      getBooks().then((data) => {
        dispatch(setNewBook(data.books));

        
      });
    }
    dispatch(resetCard());
  }, [query, dispatch]);

  const books = query ? card : newBooks;

  return (
    <>
      <div className={styles.all}>
        <Title title="New Releases Books" />
        <div>
          <div className={styles.cardDisplay}>
            {books?.map((book) => {
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
