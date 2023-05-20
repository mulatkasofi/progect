import React, { useEffect, useMemo, useState } from "react";
import styles from "./Blog.module.css";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
// import {fakeRequestForCard} from "./FakeReqest/FakeReqest";
import { getSlice } from "../../store/books/books.selectors";
import { Books, BooksAll } from "../../store/books/books.types";
import Title from "../Title/Title";
import { getBooks } from "../../api/books";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

import {
  increaseOffset,
  resetBook,
  setBook,
  setList,
} from "../../store/books/books.reducer";
import LoadMore from "../LoadMore/LoadMore";

import { useDidUpdate } from "../../hooks/useDidUpdate";
import { AppDispatch } from "../../store";
import { getSearch } from "../../api/search";

const Blog: React.FC = () => {
  const [cards, setCard] = useState<Books[]>([]);
     const dispatch = useDispatch<AppDispatch>();
    const {page}=useSelector(getSlice)
  
  // const [num, setNum] = useState(12);


 const handleIncreace=()=>{
  dispatch(increaseOffset())

 }
  useDidUpdate(() => {
    getSearch(page).then((data) => {
      console.log(data);
      
      setCard(data.books);
      setList(data.books);
    });
  }, []);



  

  return (
    <>
      <div className={styles.all}>
        <Title title="New Releases Books" />
        <div>
          <div className={styles.cardDisplay}>
            {cards.map((book, index) => {
            
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
          {/* {num <= cards.length && (
            <LoadMore setLoading={() => setNum(num + 12)} text={'Load more'}></LoadMore>
          )}
          {num >= cards.length && (
            <LoadMore setLoading={() => setNum(num -12)} text="Previos"></LoadMore>
          )} */}
          <Subscribe title={"Subscribe to Newsletter"} />

          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Blog;
