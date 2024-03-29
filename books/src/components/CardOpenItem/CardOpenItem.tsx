import React, { useEffect, useState } from "react";

import { Book as IBook } from "../../store/books/books.types";
import heart from "../../img/heart 1 2.png";
import styles from "./CardOpenItem.module.css";
import Title from "../Title/Title";
import Stars from "../Stars/Stars";
import more from "../../img/chevron-right.png";
import heart2 from "../../img/heart 1 2 — копия.png";
import {
  addBook,
  addBooks,
  addMyFavorites,
  addMyFavoritesAll,
  resetMyFavorites,
} from "../../store/books/books.reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdd,
  getAddMyFavorites,
  getIsProductInBasket,
  getIsProductInMyFavorite,
  getsetUser,
} from "../../store/books/books.selectors";
import Tabs, { TabsItem } from "../Tabs/Tabs";
import { NavLink } from "react-router-dom";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import PreviousNextMethods from "../Reviews/Reviews";

interface CardOpenItemProps {
  post: IBook;
}
const CardOpenItems: React.FC<CardOpenItemProps> = ({ post }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const itemInBasket = useSelector(getIsProductInBasket);
  const itemInBMyfavorite = useSelector(getIsProductInMyFavorite);
  const cards = useSelector(getAdd);
  const myfavorites = useSelector(getAddMyFavorites);
  const user = useSelector(getsetUser);
  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cards") as string);
    if (cards) {
      dispatch(addBooks(cards));
    }
  }, []);

  useEffect(() => {
    const myfavorites = JSON.parse(
      localStorage.getItem("myfavorites") as string
    );
    if (myfavorites) {
      dispatch(addMyFavoritesAll(myfavorites));
    }
  }, []);

  const handleAdd = () => {
    dispatch(addBook({ ...post, count: 1 }));
  };
  useDidUpdate(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);
  useDidUpdate(() => {
    localStorage.setItem("myfavorites", JSON.stringify(myfavorites));
  }, [myfavorites]);

  const handleAddMyFavorite = () => {
    dispatch(addMyFavorites(post));
  };
  const handleResetMyFavorite = () => {
    dispatch(resetMyFavorites(post.isbn13));
  };
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab: TabsItem) => {
    setActiveTab(tab.value);
  };
  const tabs: TabsItem[] = [
    { label: "Description", value: "description" },
    { label: "Authors", value: "authors" },
    { label: "Reviews", value: "reviews" },
  ];

  return (
    <>
      <Title title={post.title}></Title>

      <div className={styles.display}>
        <div className={styles.imgWrapper}>
          <img alt={post.title} src={post.image} className={styles.img} />
          {user ? (
            itemInBMyfavorite ? (
              <button className={styles.heart} onClick={handleResetMyFavorite}>
                <img src={heart2} alt="" />
              </button>
            ) : (
              <button className={styles.heart} onClick={handleAddMyFavorite}>
                <img src={heart} alt="" />
              </button>
            )
          ) : (
            <button
              className={styles.heart}
              onClick={() =>
                alert("Sign in your account to add book in favorites")
              }
            >
              <img src={heart} alt="" />
            </button>
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.price}>
            <p className={styles.cost}>{post.price}</p>
            <Stars post={post}></Stars>
          </div>
          <div className={styles.information}>
            <div>
              <p className={styles.dec}>Authors</p>
              <p className={styles.dec}>Publisher</p>
              <p className={styles.dec}>Language</p>
              <p className={styles.dec}>Format</p>
              <p className={open ? `${styles.dec}` : `${styles.hidden}`}>
                Pages
              </p>
            </div>
            <div>
              <p className={styles.decInfo}>{post.authors}</p>
              <p className={styles.decInfo}>{post.publisher}</p>
              <p className={styles.decInfo}>English</p>
              <p className={styles.decInfo}> Paper book / ebook (PDF)</p>
              <p className={open ? `${styles.decInfo}` : `${styles.hidden}`}>
                {post.pages}
              </p>
            </div>
          </div>
          <div className={styles.more}>
            <p>More information</p>
            <button
              className={styles.moreButton}
              onClick={() => setOpen(!open)}
            >
              <img
                src={more}
                alt=""
                className={open ? `${styles.return}` : ""}
              />
            </button>
          </div>
          {itemInBasket ? (
            <NavLink to={"/basket"}>
              <button className={styles.add1}>in basket</button>
            </NavLink>
          ) : (
            <button className={styles.add} onClick={handleAdd}>
              add to cart
            </button>
          )}

          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p className={styles.preview}>Preview book</p>
          </a>
        </div>
      </div>
      <div className={styles.tabs}>
        <Tabs
          tabs={tabs}
          activeTab={""}
          onTabClick={handleTabClick}
          classname={styles.a}
          classname2={styles.li}
        ></Tabs>
        {activeTab === "description" && (
          <div className={styles.tabs}>{post.desc}</div>
        )}
        {activeTab === "authors" && <>{post.authors}</>}
        {activeTab === "reviews" && <PreviousNextMethods />}
      </div>
    </>
  );
};

export default CardOpenItems;
