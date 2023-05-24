import { title } from "process";
import React, { useState } from "react";
import heart from "../../img/heart 1.png";
import searchimg from "../../img/Search.png";
import shoppingBag from "../../img/shopping-bag 1.png";
import user from "../../img/user.png";
import styles from "./Header.module.css";
import logo from '../../img/Bookstore.png'
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQueryValue } from "../../store/books/books.reducer";


const Header = () => {
  const [search,setSearch]=useState('')
  const dispatch=useDispatch()
  const handleChangeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
  }
  const handleSearchClick=()=>{
    dispatch(setQueryValue(search))
  }
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
        <button className={styles.buttonSearch} onClick={handleSearchClick} >
          <img src={searchimg} alt="" />
        </button>
      </div>
      <div>
        <NavLink to='/myfavorites'>
          <button className={styles.button}>
            <img src={heart} alt="" />
          </button>
        </NavLink>
        <NavLink to='/basket'>
          <button className={styles.button}>
            <img src={shoppingBag} alt="" />
          </button>
        </NavLink>
        <NavLink to='/signUp'>
        <button className={styles.button}>
          <img src={user} alt="" />
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
