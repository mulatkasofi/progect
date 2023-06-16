import React from "react";
import { Book } from "../../store/books/books.types";
import styles from "./MyfavoriteItem.module.css";
import { useDispatch} from "react-redux";
import { resetMyFavorites } from "../../store/books/books.reducer";
import heart from "../../img/Frame 1578 (1).png";
import Stars from "../Stars/Stars";

interface MyFavoritesItemProps {
  myfavorites: Book;
}

const MyFavoritesItem: React.FC<MyFavoritesItemProps> = ({ myfavorites }) => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetMyFavorites(myfavorites.isbn13));
  };
  return (
    <>
      <div className={styles.all}>
        <div className={styles.display}>
          <div className={styles.cardBackground}>
            <img src={myfavorites.image} alt="" className={styles.img} />
          </div>
          <div className={styles.information}>
            <p className={styles.title}>{myfavorites.title}</p>
            <p className={styles.text}>{myfavorites.subtitle}</p>
            <div className={styles.rating}>
              <p className={styles.price}>{myfavorites.price}</p>
              <Stars post={myfavorites}></Stars>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <button className={styles.delete} onClick={handleReset}>
            <img src={heart} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
export default MyFavoritesItem;
