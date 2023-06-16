import React from "react";
import styles from "./ReviesItem.module.css";
import star from "../../img/Vector.png";
interface ReviesItemProps {
  img: string;
  name: string;
}

const ReviesItem: React.FC<ReviesItemProps> = ({ img, name }) => (
  <div className={styles.all}>
    <img src={img} alt="" className={styles.center} />

    <p className={styles.name}>{name}</p>
    <div className={styles.star}>
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
    </div>
    <p className={styles.review}>
      “This is a great service for me living alone. It's nice to know that my
      important documents will be processed in a timely and reliable manner if
      the need arises.”
    </p>
  </div>
);

export default ReviesItem;
