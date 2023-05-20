import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";
import img from '../../img/Icon-Arrow-Left.png'
interface BreadCrumb {
  link: string;
}

interface BreadCrumbsProps {
  breadcrumbs: BreadCrumb[];
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ breadcrumbs }) => {
  return (
    <ul className={styles.list}>
      {breadcrumbs.map(({ link }) => (
        <li key={link} className={styles.listItem}>
          <NavLink to={link}>
              <img src={img} alt="" className={styles.img}/>
           
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
