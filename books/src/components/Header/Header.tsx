import React, { useState } from "react";
import heart from "../../img/heart 1.png";
import searchimg from "../../img/Search.png";
import shoppingBag from "../../img/shopping-bag 1.png";
import user1 from "../../img/user.png";
import styles from "./Header.module.css";
import logo from "../../img/Bookstore.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setQueryValue } from "../../store/books/books.reducer";
import {
  getBasketLength,
  getMyFavoriteLength,
  getsetUser,
} from "../../store/books/books.selectors";
import img from "../../img/Ellipse 1.png";
const Header = () => {
  const [search, setSearch] = useState("");
  const itemInBasket = useSelector(getBasketLength);
  const itemInMyfavorite = useSelector(getMyFavoriteLength);
  const user = useSelector(getsetUser);
  const dispatch = useDispatch();
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearchClick = () => {
    dispatch(setQueryValue(search));
  };
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <NavLink to="/">
          {" "}
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className={styles.searchForm}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          className={styles.search}
          value={search}
          onChange={handleChangeInput}
        />
        <button className={styles.buttonSearch} onClick={handleSearchClick}>
          <img src={searchimg} alt="" />
        </button>
      </div>
      <div>
        {itemInMyfavorite && user ? (
          <NavLink to="/myfavorites">
            <button className={styles.button}>
              <img src={heart} alt="" />
              <img src={img} alt="" className={styles.point} />
            </button>
          </NavLink>
        ) : (
          <NavLink to="/myfavorites">
            <button className={styles.button}>
              <img src={heart} alt="" />
            </button>
          </NavLink>
        )}

        {itemInBasket ? (
          <NavLink to="/basket">
            <button className={styles.button}>
              <img src={shoppingBag} alt="" />
              <img src={img} alt="" className={styles.point} />
            </button>
          </NavLink>
        ) : (
          <NavLink to="/basket">
            <button className={styles.button}>
              <img src={shoppingBag} alt="" />
            </button>
          </NavLink>
        )}

        <NavLink to="/signIn">
          <button className={styles.button}>
            <img src={user1} alt="" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
